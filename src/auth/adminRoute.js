import { Redirect, Route } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { Alert_on } from "redux/actions/alert";
const AdminRoute = ({ children }) => {
    const dispatch = useDispatch();
    return (
      <Route
        render={() => {
          return (localStorage.getItem('roles') === null) ? (
            dispatch(Alert_on("Hãy đăng nhập với tư cách Admin","Cảnh báo","warning")),
            <Redirect to={{ pathname: "/" }} />
          ) : (
            
            children
            
          );
        }}
      />
    );
  };
  
  export default AdminRoute;