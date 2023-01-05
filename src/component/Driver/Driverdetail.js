import React,{useState} from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Driverdetail() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <Header/>
    <Sidebar/>
    <div className="main-content">
        <section className="section">
            <div className="section-header">
            <h1>Table</h1>
            <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active">
                <a href="/">Dashboard</a>
                </div>
                <div className="breadcrumb-item">
                <a href="/">Components</a>
                </div>
                <div className="breadcrumb-item">Table</div>
            </div>
            </div>
            <div className="section-body">
            <h2 className="section-title">Table</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-12">
                <div className="card">
                    <div className="card-header">
                    <h4>Driver Table</h4>
                    </div>
                <div className="card-body p-0">
                <div className="table-responsive">
                    <table id="example" className="table table-striped table-md">
                    <tbody>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>image</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Action</th>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                         <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                            <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                        <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                             <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                         <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                             <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                            
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                         <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                             <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                         <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                             <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>saputra@gmail.com</td>
                         <td><img src="../assets/img/avatar/avatar-1.png" width="90px" height="60px"/></td>
                        <td>9988855447</td>  
                          <td>Mohali </td>
                        <td>
                            <li className="nav-item dropdown">
                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                            Detail
                            </a>
                             <li className="dropdown-menu">
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>View</a></li>
                            <li><a className="nav-link text-right" href="#"  onClick={handleShow}>Update</a></li>
                             <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            <li><a className="nav-link text-right" href="/document"  >Document-details</a></li>
                            </li>
                            </li>
                        </td>
                        </tr>

                        
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="card-footer text-right">
                <nav className="d-inline-block">
                    <ul className="pagination mb-0">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                        <i className="fas fa-chevron-left" />
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">
                        1 <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                        2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                        3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/">
                        <i className="fas fa-chevron-right" />
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
                </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>User Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Harman"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                        type="tel"
                            placeholder="9545555954"
                            autoFocus />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                        type="text"
                            placeholder="Mohali"
                            autoFocus />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
        </section>
      </div>
    <Footer/>
</div>
  )
}
