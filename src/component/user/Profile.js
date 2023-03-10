import React from 'react'
import Header from "../ui/Header"
import Footer from '../ui/Footer'
import Sidebar from '../ui/Sidebar'

export default function Profile() {
  return (
    <div>
        
        <Header/>
        <Sidebar/>
        <div className="main-content">
            <section className="section">
                <div className="section-header">
                <h1>Profile</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                    <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">Profile</div>
                </div>
                </div>
                <div className="section-body">
                <h2 className="section-title">Hi, Abhi</h2>
                
                <div className="row mt-sm-4">
                    <div className="col-12 col-md-12 col-lg-5">
                    <div className="card profile-widget">
                        <div className="profile-widget-header">
                        <img
                            alt="image"
                            src="../assets/img/avatar/avatar-1.png"
                            className="rounded-circle profile-widget-picture"
                        />
                      
                        </div>
                        <div className="profile-widget-description">
                        <div className="profile-widget-name text-dark">
                            Abhijeet Singh{" "}
                            <div className="text-muted d-inline font-weight-normal">
                            <div className="slash" /> Web Developer</div>
                        </div>
                       
                        </div>
                      
                    </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                    <div className="card">
                        <form method="post" className="needs-validation" noValidate="">
                        <div className="card">
                        <form className="needs-validation" noValidate="">
                            <div className="card-header">
                            <h4>Edit Profile</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"> Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" required="" />
                                <div className="invalid-feedback">What's your name?</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="email" className="form-control" required="" />
                                <div className="invalid-feedback">Oh no! Email is invalid.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Phone</label>
                                <div className="col-sm-9">
                                <input type="tel" className="form-control" />
                                <div className="valid-feedback">Good!</div>
                                </div>
                            </div>
                            <div className="form-group mb-0 row">
                                <label className="col-sm-3 col-form-label">Location</label>
                                <div className="col-sm-9">
                                <input className="form-control" type="text" required="" defaultValue={""} />
                                <div className="invalid-feedback">What do you wanna say?</div>
                                </div>
                            </div>
                            </div>
                            <div className="card-footer text-right">
                            <button className="btn btn-primary">Save Changes</button>
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
