import React,{useState} from 'react'
import Sidebar from '../ui/Sidebar'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Document() {
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
                <h1>Document Detail</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                    <a href="/">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">Document</div>
                </div>
                </div>
                <div className='row'>
                    <div className=' col-6 col-md-4  mx-auto'>
                    <table class="table">
            <thead>
                <tr>
                <th scope="col">sr.no</th>
                <th scope="col">Document</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Driving license </td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success' onClick={handleShow} type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>State Certification </td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success'onClick={handleShow}  type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Vehicle Insurance </td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success' onClick={handleShow} type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Vehicle Registration </td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success' onClick={handleShow} type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Specialized Qualification</td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success' onClick={handleShow} type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <td>Resume</td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success'onClick={handleShow}  type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <td>Profession Liability </td>
                <td><button className='btn btn-danger' type="submit"><i className='fas fa-trash-alt' ></i></button></td>
                <td><button className='btn btn-success' onClick={handleShow} type="submit"><i className='fas fa-edit' ></i> </button></td>
                </tr>
                {/* <button className='btn btn-success' type="submit" >Update</button> */}
            </tbody>
        </table>
        </div>
     </div>
     <Footer/>
     <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Document Update Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            type="file"
                            name="images"
                            // placeholder="upload png,jpeg,pdf here"
                            // autoFocus
                        />
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
</div> 
  )
}
