import React, { useEffect, useState } from 'react';
import { Button,Container, Form, FormControl} from 'react-bootstrap';
import Header from '../Header/Header';

import fakeData from '../../fakeData/fakeData';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
   const [volunteers,setVolunteers]=useState([]);
    useEffect(()=>{
        fetch('https://calm-scrubland-46170.herokuapp.com/volunteerWorks')
        .then(res => res.json())
        .then(data =>setVolunteers(data))
    },[])

//    const vol=fakeData;    
//    const [volunteers,setVolunteers]=useState(vol);
//    console.log(vol);
//    const handleAddWork=()=>{
//        fetch('http://localhost:5000/volunteerWorks',{
//            method: 'POST',
//            headers: {'Content-Type': 'application/json'},
//            body: JSON.stringify(volunteers)
//        })
//    }
    return (
        <Container > 
         <Header/> 
         {/* <button  onClick={handleAddWork} className="">Add Work</button> */}
          <div className="home-container">
          <h4 > I GROW BY HELPING PEOPLE IN NEED.</h4> 
          <Form inline >
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
          </Form> 
          </div> 
           <div className="row singleVolunteerWork">
           {
                volunteers.map(volunteerWork=>
                  <div className="col-md-3" key={volunteerWork.id} >
                    <Link to={`/registration/${volunteerWork.id}`}>
                        <img className="images" src={volunteerWork.img} alt="" />   
                        <h5 >{volunteerWork.name}</h5> 
                    </Link>                        
                </div>
                  )
            } 
            </div>    
                                                       
        </Container>
    );
}

export default Home;