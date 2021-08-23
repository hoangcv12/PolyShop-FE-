import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import { deleteProduct, ProPage } from 'redux/actions/product';



export default function Index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.products.products);
  const [state, setState] = useState(0);
  const total = useSelector((state) => state.products.total);
  useEffect(() => {
    dispatch(ProPage(state));
  }, [state, products]);

  const routerChangepage = (data) => {
    if (data === -1) {
      if (state <= 0) {
        setState(0);
      } else {
        setState(state + data);
      }
    } else {
      if (state >= (total - 1)) {
        setState(total - 1);
      }
      else {
        setState(state + data);
      }
    }
  }


  const routerChange = (data) => {
    const path = `${data}`;
    history.push(path);
  }

  const Delete = (id) => {
    if (window.confirm('Bạn muốn xóa sản phẩm?')) {
      dispatch(deleteProduct(id))
    }
  };

  return (
    <div className="col-10 offset-2 mt-5  p-2 px-md-5  " >
      <div className="btn-group mb-3">
        <h2>Quản lý sản phẩm</h2>
        <button onClick={() => routerChange("/admin/products/add")} type="button" className="btn btn-outline-info " style={{ marginLeft: '792px' }} >Thêm sản phẩm</button>
      </div>
      <table className=" table table-hover ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Thể loại</th>
            <th scope="col">Trạng thái</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody >
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.createDate}</td>
              <td>{product.category.name}</td>
              <td>
                {product.available === true ? (
                  <span  >Còn hàng</span>
                ) : (
                  <span className="text-danger">Hết hàng</span>
                )}
              </td>
              <td>
                <EditIcon
                  className="  text-warning"
                  onClick={() => routerChange(`/admin/products/${product.id}`)}
                >
                </EditIcon>
                <DeleteIcon
                  className="ms-3 text-danger"
                  onClick={() => Delete(product.id)}
                ></DeleteIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link text-info" href onClick={() => setState(0)}><i style={{ fontSize: "26px" }} className="fas fa-angle-double-left"></i></a></li>
          <li className="page-item"><a className="page-link text-info" href onClick={() => routerChangepage(-1)}><i style={{ fontSize: "26px" }} className="fas fa-angle-left"></i></a></li>
          <p style={{ fontSize: "26px" }} ></p>
          <li className="page-item"><a className="page-link text-info" href onClick={() => routerChangepage(1)}><i style={{ fontSize: "26px" }} className="fas fa-angle-right"></i></a></li>
          <li className="page-item"><a className="page-link text-info" href onClick={() => setState(total - 1)}><i style={{ fontSize: "26px" }} className="fas fa-angle-double-right"></i></a></li>
        </ul>
      </nav>
    </div>
  )
}

