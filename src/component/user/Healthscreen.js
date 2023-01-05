import React from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'

export default function Healthscreen() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className="main-content">
            <section className="section">
                <div className="section-header">
                <h1>Progress</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                    <a href="/main">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                    <a href="/healthscreen">Mental Health Screen</a>
                    </div>
                    <div className="breadcrumb-item">Health-Screen</div>
                </div>
                </div>
                <div className="section-body">
                <h2 className="section-title">Health-Screen</h2>
                
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>GOOD</h4>
                        </div>
                        <div className="card-body">

                            <div className="progress mb-3">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                data-width="100%"
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                data-width="75%"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div className="progress-bar bg-success"
                                role="progressbar"
                                data-width="50%"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                data-width="25%"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                data-width="0%"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4>BAD</h4>
                        </div>
                        <div className="card-body">

                            <div className="progress mb-3 ">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                data-width="100%"
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                data-width="75%"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress   mb-3">
                            <div className="progress-bar bg-warning "
                                role="progressbar"
                                data-width="50%"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                data-width="25%"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
                            <div className="progress  mb-3">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                data-width="0%"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                            </div>
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
