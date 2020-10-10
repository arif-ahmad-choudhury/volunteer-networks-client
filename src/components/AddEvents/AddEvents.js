import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/volunteer1.png';
import './AddEvents.css';
const AddEvents = () => {
    const [addEvent,setAddEvent] =useState([]);

    useEffect(()=>{
        fetch('https://calm-scrubland-46170.herokuapp.com/adminAddEvents')
        .then(res =>res.json())        
        .then(data =>setAddEvent(data));
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
                    <Link to="#">
                    <img src="https://i.ibb.co/GcnSKJq/plus-1.png" alt="addEvent" />
                        Add event
                    </Link>
                </div>
                {                 
                <div className="col-md-9">
                    <h5 className="my-4 ml-2 font-weight-bold text-left">Add event</h5>
                    <div className="d-flex justify-content-center">
                <div className="row my-12">
                    {
                        addEvent.map(events =>
                            <div className="col-xl-6 col-lg-6 col-md-6 single-events my-3" key={events._id}>
                                <div className="eventsInfo row">
                                    <div className="row">                                    
                                        <div className="col-md-12" >
                                            <h5><b> Event Title :</b> {events.workName}</h5>
                                            <h6><b> Event Date:</b> {new Date(events.date).toDateString('dd/MM/yyyy')}</h6>
                                            <p><b>Description:</b> {events.description}</p>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                            <Button variant="primary" className="col-md-9 m-auto"> Submit</Button>
                        </div>
                     </div>
                </div>
                        
                }
            </div>
        </Container>
    );
};

export default AddEvents;