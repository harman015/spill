import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import  { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [usercount, setUsercount] = useState("");
  const [drivercount,setDrivercount] = useState("")
 
   
  useEffect(() => {
    let usercount = axios
      .get("http://localhost:5000/user/count")
      .then((result) => {
        setUsercount((usercount = result.data.success));
      });
      let drivercount = axios
      .post("http://localhost:5000/driver/count")
      .then((result) => {
        console.log("============",result);
        setDrivercount((drivercount = result.data.success));
      });
      

    //  };
  }, []);
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className="main-content " id="blank">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row " >
            <div className="col-lg-3 ml-4 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4 className='text-dark'>Total Users</h4>
                  </div>
                  <div className="card-body">
                  {usercount}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ml-4  col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="far fa-newspaper" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4 className='text-dark'>Total Drivers</h4>
                  </div>
                  <div className="card-body">
                    {drivercount}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ml-4  col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="far fa-file" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4 className='text-dark'>Reports</h4>
                  </div>
                  <div className="card-body">
                    1,201
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ml-4  col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-circle" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4 className='text-dark'>Online Users</h4>
                  </div>
                  <div className="card-body">
                    47
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}
