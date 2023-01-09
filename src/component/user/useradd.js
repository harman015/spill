import React,{useState} from 'react';
import Header from "../ui/Header";
import Footer from '../ui/Footer';
import Sidebar from '../ui/Sidebar';
import axios from "axios";
import { Navigate } from 'react-router-dom';
export default function Profile() {
   
    const [user,setUser]= useState({name:"",email:"",phone:"",city:""});
    
    const userdata = async() => {
        axios.get("http://localhost:5000/user/adduser",user).then((result) => {
         setUser({ user: result.data.success });
          console.log("============",result.data)
         Navigate("/user")
        });
      };
     
      const handleImage=async()=>{
         axios.post("http://localhost:5000/user/fileupload").then((result) => {
            console.log(result.data.success);

       })
    }
    const handleChange = (e) => {
        e.preventDefault(); 
        const { name, value } = e.target;
        console.log(name,value,"============fhdgvfudv")
       return setUser({...user,[name]:value});
      }; 
  return (
    <div>
        
        <Header/>
        <Sidebar/>
        <div className="main-content">
            <section className="section">
                <div className="section-header">
                <h1>User Add</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                    <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">User Add</div>
                </div>
                </div>
                <div className="section-body">
                <h2 className="section-title">Hi, Abhi</h2>
                
                <div className="row mt-sm-4">
                    <div className="col-12 col-md-12 col-lg-5">
                    <div className="card profile-widget">
                    
                    </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                    <div className="card">
                        <form method="post" className="needs-validation" noValidate="">
                        <div className="card">
                        <form className="needs-validation" noValidate="">
                            <div className="card-header">
                            <h4>User Add</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"> Name</label>
                                <div className="col-sm-9">
                                <input type="file" className="form-control" name="image" value={user.image} onChange={handleImage} required="" />
                                <div className="invalid-feedback">What's your name?</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"> Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required="" />
                                <div className="invalid-feedback">What's your name?</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required="" />
                                <div className="invalid-feedback">Oh no! Email is invalid.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Phone</label>
                                <div className="col-sm-9">
                                <input type="tel" className="form-control" name="phone" value={user.phone} onChange={handleChange}  />
                                <div className="valid-feedback">Good!</div>
                                </div>
                            </div>
                            <div className="form-group mb-0 row">
                                <label className="col-sm-3 col-form-label">City</label>
                                <div className="col-sm-9">
                                <input className="form-control" type="text" name="city" value={user.city} onChange={handleChange}  required="" defaultValue={""} />
                                <div className="invalid-feedback">What do you wanna say?</div>
                                </div>
                            </div>
                            </div>
                            <div className="card-footer text-right">
                            <button className="btn btn-primary" onClick={userdata}>Save Changes</button>
                            </div>
                        </form>
                        </div>

                        </form>
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
