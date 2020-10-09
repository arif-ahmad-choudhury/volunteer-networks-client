import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import eventImg from '../../images/extraVolunteer.png';
import './Events.css';
import { useHistory } from 'react-router-dom';
const Events = () => {
    const [singleEvent,setSingleEvent] =useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();

    useEffect(()=>{
        fetch('http://localhost:5000/singleEvent?email='+loggedInUser.email)
        .then(res =>res.json())        
        .then(data =>setSingleEvent(data));
    },[])

    const deleteEvent = (id) => {
        history.push("/deleteConfirmed");  
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(result =>{
            console.log('deleted successfully');
        })        
    }
    return (
        <Container >
            <div>
                <Header/>        
            </div>
            <div className="d-flex justify-content-center">
                <div className="row my-5">
                    {
                        singleEvent.map(events =>
                            <div className="col-xl-6 col-lg-6 col-md-6 single-events my-3" key={events._id}>
                                <div className="eventsInfo row">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={eventImg} alt="" className="img-fluid max-width: 45% height: 45%" />
                                        </div>
                                        <div className="col-md-6" >
                                            <h5>{events.workName}</h5>
                                            <h6><b>Date:</b> {new Date(events.date).toDateString('dd/MM/yyyy')}</h6>
                                            <p><b>Description:</b> {events.description}</p>
                                            <Button onClick={() => deleteEvent(events._id)} variant="light">Cancel</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </Container>
     
    );
};

export default Events;