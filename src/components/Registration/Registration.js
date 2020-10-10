import React, { useContext } from 'react';
import './Registration.css';
import logo from '../../logos/volunteer1.png';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { Button, Container } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import volunteers from '../../fakeData/fakeData'

const Registration = () => {
    let  workId  = useParams();   

    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    workId = volunteers.find(singleWork =>parseInt(singleWork.id) === parseInt(workId.id));
    

    const history = useHistory();
    const onSubmit = data =>{
        console.log('form submitted',data);

        history.push("/events");

        fetch('https://calm-scrubland-46170.herokuapp.com/singleEvent',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    } 
       
    return (
     <Container className="registration-container text-center pt-5">
         <img src={logo} alt=""/>
        <div className="registration-form mt-5"> 
            <h4><strong>Register as an Volunteer</strong></h4><br/>          
            <form  onSubmit={handleSubmit(onSubmit)} >                                      
                    <input name="name" type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name"/> 
                    {errors.name && <span className="error"> Full Name is required</span>}      
                    <br/><br/>               
                    <input name="email" type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="User Name or E-mail"/> 
                    {errors.email && <span className="error"> User Name or E-mail is required</span>}
                    <br/><br/>                          
                    <input name="date" type="date" ref={register({ required: true })} placeholder="date"/> 
                    {errors.date && <span className="error"> Date is required</span>}  
                     <br/><br/>  
                     <input name="description" type="text"ref={register({ required: true })} placeholder="Description"/> 
                    {errors.description && <span className="error">Description is required</span>}      
                    <br/><br/>
                     <input name="workName" type="text" defaultValue={workId.name} ref={register({ required: true })} placeholder="Volunteer Work Name"/> 
                    {errors.workName && <span className="error"> Volunteer Work Name is required</span>}      
                    <br/><br/>   
                                     
                    <input type="submit" value="Registration" className="my-3 col-md-9" variant="primary" />                      
                 
            </form>           
         </div>        
     </Container>  
    );
};

export default Registration;