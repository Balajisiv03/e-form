import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import './Home.css';
import ParticlesBg from 'particles-bg';

const Home = () =>{
    const[name,setName]=useState("");
    const[dob,setDob]=useState("");
    const[age,setAge]=useState("");
    const[department,setDepartment]=useState("");
    const[address,setAddress]=useState("");
    const[empid,setEmpid]=useState("");
    const[salary,setSalary]=useState("");
    const[designation,setDesignation]=useState("");
    const[emplist,setEmplist]=useState([]);

    // useEffect(()=>{
    //     Axios.get("http://localhost:5000/api/get").then((response)=>{
    //         setEmplist(response.data);
    //         console.log(response.data);
    //     })
    // })
    function show(){
        Axios.get("http://localhost:5000/api/get").then((response)=>{
            setEmplist(response.data);
             console.log("Data :",response);
        })
        console.log("check");
    }

    function deletedetails(name){
        Axios.delete(`http://localhost:5000/api/delete/${name}`);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,dob,age,department,address,empid,salary,designation)
        
            Axios.post("http://localhost:5000/api/insert",{
                name,dob,age,department,address,empid,salary,designation
        }).then(()=>{
            console.log("successful insert");
        })
    
        .catch(error=>console.log(error));
        
        
    }
    

    return (
        <div className="App">
            <ParticlesBg num={200} type="circle" bg={true} />
            <div className="auth-section">
                <form onSubmit={handleSubmit}>
                    <h2 style={{margin: "0 0 0 620px"}}>Employee details</h2>
                    <div className="container">
                    <label htmlFor="name">
                        <b>Name:     </b>
                        <input type="text" id="name" name="name" placeholder="Enter name" onChange={(e)=>{
                        setName(e.target.value)
                        }}/>
                    </label>
                    </div> 
                    <div className="container">
                    <label htmlFor="dob">
                        <b>Date of Birth: </b>
                        <input type="date" id="dob" name="dob"  onChange={(e)=>{
                        setDob(e.target.value)
                        }}/>
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="age">
                        <b>Age:     </b>
                        <input type="number" id="age" name="age"  placeholder="Enter age"  onChange={(e)=>{
                        setAge(e.target.value)
                        }}/>
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="dept">
                        <b>Department: </b>
                        <input type="text" id="dept" name="dept"  placeholder="Enter department"  onChange={(e)=>{
                        setDepartment(e.target.value)
                        }}/>
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="address">
                        <b>Address: </b>
                        <input type="text" id="address" name="address"  placeholder="Enter address"  onChange={(e)=>{
                        setAddress(e.target.value)}}/>
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="empid">
                        <b>Employee id: </b>
                        <input type="number" id="empid" name="empid"  placeholder="Enter employee id"  onChange={(e)=>{
                        setEmpid(e.target.value)}}/>
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="salary">
                        <b>Salary: </b>
                        <input type="number" id="salary" name="salary"  placeholder="Enter salary"  onChange={(e)=>{
                        setSalary(e.target.value)}} />
                    </label>
                    </div>
                    <div className="container">
                    <label htmlFor="designation">
                        <b>Designation: </b>
                        <input type="text" id="designation" name="designation"  placeholder="Enter designation"  onChange={(e)=>{
                        setDesignation(e.target.value)}}/>
                    </label><br/>
                    </div>
                <button className="btn" type="submit">Submit</button>
                <button className="button" onClick={show}>Show</button>
                
            </form>
        </div>    

        { emplist.map((val,id)=>{
                return (
                 <div className="box" key={id}>
                    {/* <ParticlesBg num={200} type="custom" bg={true} /> */}
                    <p>Name:{val.name}</p>
                    <p>dob:{val.dob} </p>
                    <p>age:{val.age} </p>
                    <p>department:{val.department} </p> 
                    <p>address:{val.address}</p>
                    <p>empid:{val.empid}</p>
                    <p>salary:{val.salary}</p>
                    <p>designation:{val.designation}</p>
                    <button className="button" onClick={(name)=>{deletedetails(val.name)}}>Delete Details</button>
                    <input type="text" className="Updateinput" />
                    <button className="button">Update Details</button>
                </div>
            );
            })}  
        </div>
    );
}

export default Home;