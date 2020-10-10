import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/volunteer1.png';
import './Admin.css';
const Admin = () => {
    const [allEvent,setAllEvent] =useState([]);

    useEffect(()=>{
        fetch('https://calm-scrubland-46170.herokuapp.com/adminAllEvents')
        .then(res =>res.json())
        // .then(data=>console.log(data))
        .then(data =>setAllEvent(data));
    },[])
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                    </Link>
                    <Link to="#"> 
                    <img src="https://i.ibb.co/xDY6bZC/users-alt-1.png" alt="volunteer" />
                        Volunteer register list
                    </Link>
                    <Link to="addEvents">
                    <img src="https://i.ibb.co/GcnSKJq/plus-1.png" alt="addEvent" />
                        Add event
                    </Link>
                </div>
                {                 
                <div className="col-md-9">
                    <h5 className="my-4 ml-2 font-weight-bold text-left">Volunteer register list</h5>
                    <div className="row">
                        <Table className="adminTable">
                            <thead className="adminTableHead">
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registration date</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allEvent.map(
                                        singleEvent =>
                                            <tr key={singleEvent._id}>
                                                <td>{singleEvent.name}</td>
                                                <td>{singleEvent.email}</td>
                                                <td>{new Date(singleEvent.date).toDateString('dd/MM/yyyy')}</td>
                                                <td>{singleEvent.workName}</td>
                                                <td>
                                                    <button  className="deleteIcon">
                                                        <img src="https://i.ibb.co/Wfb4dtv/delete.png" alt="delete" />
                                                    </button>
                                                </td>
                                            </tr>
                                    )
                                }                                
                            </tbody>
                        </Table>
                    </div>
                </div>
                        
                }
            </div>
         
        </Container>
    );
};

export default Admin;