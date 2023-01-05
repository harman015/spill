import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formvalues, setformValues] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [success, setSuccess] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formvalues, [name]: value });
    console.log(formvalues, "======");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setformError(validate(formvalues));
    setSuccess(true);
    try {
      let data = {
        email: formvalues.email,
        password: formvalues.password,
      };
      await axios
        .post("http://localhost:5000/admin/login", data)
        .then((result) => {
          localStorage.setItem(
            "token",
            `Bearer ${result.data.success.access_token}`
          );
          if (success) {
            setAuth(true);
            swal("Success!", "login  Successfully!", "success");
            navigate("/main");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0) {
      // console.log(formvalues);
      return;
    }
  }, [formError]);

  const validate = (values) => {
    const error = {};
    const pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if (!values.email) {
      error.email = "email is required";
    } else if (!pattern.test(values.email)) {
      error.email = "this is not a not a valid e-mail address";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };
  return (
    <div>
         <div id="app">
         {auth && (
        <>
          <Navigate to="/home" />
        </>
      )}
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <img src="../../assets/img/images/logo.png" alt="logo" width={100} className="shadow-light rounded-circle" />
                </div>
                <div className="card card-primary">
                  {/* <div className="card-header">
                    <h4>Login</h4>
                    </div> */}
                  <div className="card-body">
                    <form method="POST"  className="needs-validation" noValidate>
                      <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input id="email" type="email"  value={formvalues.email}
                      onChange={handleChange}  className="form-control" name="email" tabIndex={1} required  />
                        {/* <div className="invalid-feedback">
                          Please fill in your email
                        </div> */}
                      </div>
                      <p className="text-danger">{formError.email}</p>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">Password</label>
                        </div>
                        <input id="password" type="password"  value={formvalues.password}
                      onChange={handleChange}  className="form-control" name="password" tabIndex={2} required />
                        {/* <div className="invalid-feedback">
                          please fill in your password
                        </div> */}
                      </div>
                      <p className="text-danger">{formError.password}</p>
                      <div className="form-group ">
                        <div className="custom-control float-left custom-checkbox">
                          <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                          <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                        </div>
                        <div className="float-right">
                            <a href="/forget-password" className="text-small">
                              Forgot Password?
                            </a>
                          </div>
                      </div>

                      <div className="form-group">
                        <button  type="submit"   onClick={HandleSubmit} className="btn btn-success btn-lg btn-block" tabIndex={4}>
                       Login
                        </button>                  
                       </div>
                      <div className="mt-5 text-muted text-center">
                         Don't have an account? <a href="/register">Sign Up</a><br/><br/>
                        <p> &copy; To Spill 2023</p>
                      </div>
                    </form>
                    {/* <div className="text-center mt-4 mb-3">
                      <div className="text-job text-muted">Login With Social</div>
                    </div> */}
                    {/* <div className="row sm-gutters">
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-facebook">
                          <span className="fa fa-apple" /> Facebook
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-twitter">
                          <span className="fab fa-twitter" /> Twitter
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                
              
              </div>
            </div>
          </div>
        </section>
      </div>
  
    </div>
  )
}
