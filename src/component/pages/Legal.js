import React from 'react'
import Footer from '../ui/Footer'
import Sidebar from '../ui/Sidebar'
import Header from '../ui/Header'
export default function Legal() {
  return (
        <div>
            <Header/>
            <Sidebar/>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                    <h1>Legal</h1>
                    <div className="section-header-breadcrumb">
                        <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                        </div>
                        <div className="breadcrumb-item">
                        <a href="#">Legal</a>
                        </div>
                        <div className="breadcrumb-item">Legal</div>
                    </div>
                    </div>
                    <div className="section-body">
                    <h2 className="section-title">Legal</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <form>
                            <div className="card-header">
                                <h4>Legal</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label>
                              
                                </div>
                                <div className="form-group">
                                <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label>
                               
                                </div>
                                <div className="form-group">
                                <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label>
                                
                                </div>
                            </div>
                            </form>
                        </div>
                        <div class="card-footer text-right">
                           <button  class="btn btn-primary text-center"> <a href="/privacy">Continue</a></button>
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
