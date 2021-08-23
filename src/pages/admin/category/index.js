import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import { CatePage } from 'redux/actions/category';


export default function Index() {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categorys.categorys);
  const [state, setState] = useState(0);
  useEffect(() => {
    dispatch(CatePage(state));
  }, []);


  return (
    <div className="col-6 offset-2 mt-5  p-2 px-md-5   " >
      <div className="btn-group mb-3">
        <h2>Quản lý thể loại</h2>
        <button type="button" className="btn btn-outline-info " style={{ marginLeft: '315px' }} >Thêm thể loại</button>
      </div>
      <table className=" table table-hover ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tên thể loại</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {categorys.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>
                <EditIcon
                  className="  text-warning"
                //   onClick={() => routerChange(`/admin/products/${product.id}`)}
                >
                </EditIcon>
                <DeleteIcon
                  className="ms-3 text-danger"
                //   onClick={() => Delete(product.id)}
                ></DeleteIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link text-info" href ><i style={{ fontSize: "26px" }} className="fas fa-angle-double-left"></i></a></li>
          <li className="page-item"><a className="page-link text-info" href ><i style={{ fontSize: "26px" }} className="fas fa-angle-left"></i></a></li>
          <p style={{ fontSize: "26px" }} ></p>
          <li className="page-item"><a className="page-link text-info" href ><i style={{ fontSize: "26px" }} className="fas fa-angle-right"></i></a></li>
          <li className="page-item"><a className="page-link text-info" href ><i style={{ fontSize: "26px" }} className="fas fa-angle-double-right"></i></a></li>
        </ul>
      </nav>
    </div>
  )
}

