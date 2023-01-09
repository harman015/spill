import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useParams,useNavigate } from "react-router-dom";

export default function UserListing() {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState("");
    const handleClose = () => setShow(false);

  const [user,setUser]= useState({name:"",email:"",phone:"",city:""});
  const [userlist, setUserlist] = useState("");
  const navigate = useNavigate();

 const userdata = async() => {
   axios.get("http://localhost:5000/user/allusers").then((result) => {
    setUserlist({ userlist: result.data.success });
    //  console.log("============",result.data)
    
   });
 };

    const handleShow =(data)=> { 
    //    console.log(data,"==============data");
        setShow(true)
        setUser(data)
        }
        const { id } = useParams();
    // console.log(id,"===============");

    const handleEdit =(data)=> { 
    // console.log(data,"==============data");
    setEdit(true)
    setUser(data)
    setEditId(data._id)

    
    }
    const handleDelete = async (data) => {  
        // console.log(data,'==================');
        // return 
        await axios.post(`http://localhost:5000/user/deleteuser/${data}`).then((result)=>{
            // console.log({user:result.data.success})
            userdata();
        })};

    const handleChange = (e) => {
        e.preventDefault(); 
        const { name, value } = e.target;
        // console.log(name,value,"============fhdgvfudv")
       return setUser({...user,[name]:value});
      };
    
      const updateUser =async()=>{

        await  axios.post(`http://localhost:5000/user/updateuser/${editId}`,user).then((result)=>{
              console.log({user:result.data.success}) 
              setUser({user:result.data.success})
              navigate("/main")
              setEditId("")
            
      })}

 useEffect(() => {
   userdata()
 }, []);


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
                                <h4>User Table</h4>
                               
                                <a href="/useradd" className='btn btn-success' type="submit"><i className='fas fa-user' >+</i></a>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped table-md">
                                        <thead>
                                            <tr>
                                            <th >Sr.No</th>
                                            <th >Name</th>
                                            <th >Image</th>
                                            <th >Email</th>
                                            <th >Phone</th>
                                            <th >City</th>
                                            <th >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {userlist.userlist?.map((e,i) => {
                                            return(                                               
                                                 <tr key={i}>
                                                <td >{i+1}</td>
                                                <td>{e.name}</td>
                                                <td>
                                                    <img src={`http://localhost:5000/image/${e.image}`} width="100px" alt="not upload"/>
                                                </td>
                                                <td>{e.email}</td>
                                                <td>{e.phone}</td>
                                                <td>{e.city}</td>
                                                <td>
                                            <a href="/" className="btn btn-success " data-toggle="dropdown">
                                                Detail
                                            </a>
                                            <button className='btn btn-danger' onClick={()=>handleDelete(e._id)} type="submit">
                                                <i className="fas fa-trash alt"></i>
                                            </button>
                                            <li className="dropdown-menu">
                                             <li><a className="nav-link text-right"  href="#show"  onClick={()=>handleShow(e)}>View</a></li>
                                             <li><a className="nav-link text-right" href="#edit"  onClick={()=>handleEdit(e)}>Update</a></li>
                                             
                                            </li>
                                           </td> 
                                          
                                            </tr>
                                            )}
                                     )}
                            </tbody>
                            </table>
                          </div>
                         </div> 
                        </div> 
                        </div>
                        <Modal show={show}  onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>User Detail</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user.name}
                                    autoFocus 
                                />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={user.email}
                                    
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
                                    value={user.phone}
                                    autoFocus />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>City</Form.Label>
                                <Form.Control 
                                    type="text"
                                  
                                    value={user.city}
                                    autoFocus />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Done
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={edit}  onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>User Update</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user.name}
                                    name="name"
                                    onChange={handleChange}
                                   
                                />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                   
                                />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleControlTextarea1"
                                >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control 
                                    type="tel"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleControlTextarea1"
                                >
                                <Form.Label>City</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="city"
                                    placeholder="Mohali"
                                    value={user.city}
                                    onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={updateUser}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </section>      
        <Footer/>
        </div> 
    </div>
  )
}
