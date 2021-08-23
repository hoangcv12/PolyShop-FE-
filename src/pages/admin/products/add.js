import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from 'redux/actions/product';
import { List_Category } from 'redux/actions/category';
import axios from 'axios';
import { Alert_on } from 'redux/actions/alert';
import { get } from 'api/categoryApi';


export default function Add() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const categorys = useSelector(state => state.categorys.categorys);
    const [image, setimage] = useState("default.jpg");
    const [createDate, setcreateDate] = useState(new Date());
    useEffect(() => {
        dispatch(List_Category())
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
         const value = { ...data, category:res.data ,  createDate, image };
        dispatch(addProduct(value));
        dispatch(Alert_on("Thêm thành công","Success","success"));
        reset();
        setimage("default.jpg")
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
                                {...register("name", {required : true})} />
                                {errors.name && <i className="text-danger">Không được để trống</i>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Giá sản phẩm</label>
                            <input type="number"
                                className="form-control"
                                {...register("price", {required : true})} />
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
                                {...register("available")}
                            >
                                <option value="true" >Còn hàng</option>
                                <option value="false">Hết hàng</option>
                            </select>
                        </div>
                        <button type="submit" className="form-control btn btn-primary ">Thêm sản phẩm</button>
                    </div>
                    <div className="col-4 offset-1">
                        <img  src={`http://localhost:8080/rest/file/${image}`} alt="" style={{ maxWidth: "100%", height: "320px", paddingLeft: "50px", paddingBottom: "10px" }} />
                        <input className="form-control" type="file" onChange={onChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}

