import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signin } from "api/authApi";
import './css.css';
import axios from 'axios';
import { Alert_on } from 'redux/actions/alert';
import { useDispatch } from 'react-redux';

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {

      const response = await signin(data);
      localStorage.setItem('user', response.data.jwtToken);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      dispatch(Alert_on("Username hoặc password không đúng", "Lỗi", "danger"));
    }
  }

  const redirectUser = async () => {
    if (success) {
      const axiosClient = axios.create({
        baseURL: "http://localhost:8080/jwt",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem('user')
        }
      });
      const { data } = await axiosClient.get();
      var roles = "";
      data.every(data => {
        if (data.roles.id === "DIRE") {
          roles = data.roles.id;
          localStorage.setItem('roles', JSON.stringify(data.roles.id));
          return false;
        }
        else if (data.roles.id === "STAF") {
          localStorage.setItem('roles', JSON.stringify(data.roles.id));
          roles = data.roles.id;
          return false;
        }
        localStorage.removeItem('roles');
        return true;
      })

      if (roles === "DIRE") {
        history.push('/admin')
      }
      else if (roles === "STAF") {
        history.push('/admin')
      }
      else {
        history.push('/')
        dispatch(Alert_on("Hãy đăng nhập với tư cách admin", "Cảnh báo", "warning"));
        setSuccess(false);
      }
    }


  }
  redirectUser()
  return (
    <>

      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-label-group">
                        <input type="text" id="inputUser" className="form-control" placeholder="Username" required autoFocus {...register('username')} />
                        <label htmlFor="inputUser">Username</label>
                      </div>
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required {...register('password')} />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                      <div >
                        <a className="thea" href="" >Forgot password?</a></div>
                      <p className="login-card-footer-text">Don't have an account? <Link className="thea" to="/signup" >Register here</Link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
