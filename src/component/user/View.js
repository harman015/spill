// import React, { useState }from 'react';
// import Header from '../ui/Header';
// import Sidebar from '../ui/Sidebar';
// import Footer from '../ui/Footer';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// export default function View() {
//     const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//         <Header/>
//         <Sidebar/>
//         <div className="main-content " id="#exampleModal">
//             <section className="section">
//                 <div className="section-header">
//                 <h1>Detail form</h1>
//                 <div className="section-header-breadcrumb">
//                     <div className="breadcrumb-item active">
//                     <a href="/">Dashboard</a>
//                     </div>
//                     <div className="breadcrumb-item">
//                     <a href="/">Form</a>
//                     </div> 
//                 </div>
//                 </div>
//         <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Detail</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Harman"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Phone</Form.Label>
//               <Form.Control 
//                type="tel"
//                 placeholder="9545555954"
//                 autoFocus />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Location</Form.Label>
//               <Form.Control 
//                type="text"
//                 placeholder="Mohali"
//                 autoFocus />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//         {/* <div className="main-content " id="/exampleModal">
//             <section className="section">
//                 <div className="section-header">
//                 <h1>Detail form</h1>
//                 <div className="section-header-breadcrumb">
//                     <div className="breadcrumb-item active">
//                     <a href="/">Dashboard</a>
//                     </div>
//                     <div className="breadcrumb-item">
//                     <a href="/">Form</a>
//                     </div>
                   
//                 </div>
//                 </div>
//                 <div className="section-body">
//                 <h2 className="section-title">Form </h2> 
//                 </div>
//                 <div className="row mt-sm-4">
//                     <div className="col-12 col-md-12 col-lg-5">
//                     <div className="card profile-widget">
//                         <div className="profile-widget-header">
//                         <img
//                             alt="image"
//                             src="../assets/img/avatar/avatar-1.png"
//                             className="rounded-circle profile-widget-picture"
//                         />
                       
//                         </div>
//                         <div className="profile-widget-description">
//                         <div className="profile-widget-name text-dark">
//                             Abhijeet Singh{" "}
//                             <div className="text-muted d-inline font-weight-normal">
//                             <div className="slash" /> Web Developer</div>
//                         </div>
//                         </div>
//                     </div>
//               const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);        </div>
//                     <div className="col-12 col-md-12 col-lg-7">
//                     <div className="card">
//                         <form method="post" className="needs-validation" noValidate="">
//                         <div className="card">
//                         <form className="needs-validation" noValidate="">
//                             <div className="card-header">
//                             <h4>User Detail</h4>
//                             </div>
//                             <div className="card-body">
//                             <div className="form-group row">
//                                 <label className="col-sm-3 col-form-label"> Name</label>
//                                 <div className="col-sm-9">
//                                 <input type="text" className="form-control" required="" />
//                                 <div className="invalid-feedback">What's your name?</div>
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label className="col-sm-3 col-form-label">Email</label>
//                                 <div className="col-sm-9">
//                                 <input type="email" className="form-control" required="" />
//                                 <div className="invalid-feedback">Oh no! Email is invalid.</div>
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label className="col-sm-3 col-form-label">Phone</label>
//                                 <div className="col-sm-9">
//                                 <input type="tel" className="form-control" />
//                                 <div className="valid-feedback">Good!</div>
//                                 </div>
//                             </div>
//                             <div className="form-group mb-0 row">
//                                 <label className="col-sm-3 col-form-label">Location</label>
//                                 <div className="col-sm-9">
//                                 <input className="form-control" type="text" required="" defaultValue={""} />
//                                 <div className="invalid-feedback">What do you wanna say?</div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div className="card-footer text-right">
//                             <button className="btn btn-primary">Go Back</button>
//                             </div>
//                         </form>
//                         </div>

//                         </form>
//                     </div>
//                     </div>
//                 </div>
//             </section>
//         </div> */}
//         </section>
//         </div>
//         <Footer/>
//     </div>
//   )
// }
