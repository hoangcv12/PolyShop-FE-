
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from 'redux/actions/product';
import { List_Category } from 'redux/actions/category';
import axios from 'axios';
import { Alert_on } from 'redux/actions/alert';
import { useHistory, useParams } from 'react-router-dom';
import { getId } from 'api/productApi';
import { get } from 'api/categoryApi';




export default function Edit() {
    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const categorys = useSelector(state => state.categorys.categorys);
    const [image, setimage] = useState("default.jpg");
    const [createDate, setcreateDate] = useState();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await getId(id);
                reset(data);
                setValue("category", data.category.id);
                setimage(data.image)
                setcreateDate(new Date(data.createDate))
            } catch (error) {}
        };
        getProduct();
        dispatch(List_Category());
    }, [])

    const onChange = async (event) => {
        const fd = new FormData();
        fd.append('file', event.target.files[0]);
        const { data } = await axios.post("http://localhost:8080/rest/file", fd)
        setimage(data);
        console.log(data);
    }
    const onSubmit = async (data) => {
        const res = await get(data.category)
        const value = { ...data, id: id, category: res.data, createDate, image };
        dispatch(editProduct(value));
        history.push("/admin/products");
        dispatch(Alert_on("Cập nhật thành công", "Success", "success"));
    }
    return (
        <div className=" offset-2 mt-5  p-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-4 offset-1 " >
                        <div className="mb-3">
                            <label className="form-label">Tên sản phẩm</label>
                            <input type="text"
                                className="form-control"
                                {...register("name", { required: true })} />
                            {errors.name && <i className="text-danger">Không được để trống</i>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Giá sản phẩm</label>
                            <input type="number"
                                className="form-control"
                                {...register("price", { required: true })} />
                            {errors.price && <i className="text-danger">Không được để trống</i>}
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Thể loại</label>
                            <select
                                className="form-control"
                                {...register("category")}
                            >
                                {categorys.map((value, key) => (
                                    <option key={key} value={value.id} >{value.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Trạng thái</label>
                            <select
                                className="form-control"
                                // defaultValue={products.available}
                                {...register("available")}
                            >
                                <option value="true" >Còn hàng</option>
                                <option value="false">Hết hàng</option>
                            </select>
                        </div>
                        <button type="submit" className="form-control btn btn-primary ">Cập nhật</button>
                    </div>
                    <div className="col-4 offset-1">
                        <img src={`http://localhost:8080/rest/file/${image}`} alt="" style={{ maxWidth: "100%", height: "320px", paddingLeft: "50px", paddingBottom: "10px" }} />
                        <input className="form-control" type="file" onChange={onChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}

