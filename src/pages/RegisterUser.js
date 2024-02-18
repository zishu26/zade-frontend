import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function RegistrationForm() {

    let navigate = useNavigate();
    const [adduser,setUser]=useState({
            name:"",
            email:"",
            password:""
    })
    const{name,email,password}=adduser
    
    const onInputChange=(e)=>{
        setUser({...adduser, [e.target.name]: e.target.value})

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/evaluation/user/register",adduser)
        navigate("/")
        return(
        <script>
            function myAlert() {
            alert("User registered successfully..!!")
            }
        </script>
        )
    };
  return (
    <div className="container" style={{ paddingTop: '130px'}}>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' style = {{backgroundColor: 'darkseagreen'}} >
            <h2 className='text-center m-4'> Add New User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>Email</label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter email id"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <button id="addUserSubmitButton" type='submit' color='danger' className='btn btn-outline-primary'>Submit</button>
            <Link id="cancelButton"  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
            </div>
        </div>
    </div>
  )
}

