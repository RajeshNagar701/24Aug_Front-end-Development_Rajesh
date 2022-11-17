import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import axios from 'axios';




function Signup() {


    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        password: "",
        number: ""
    })
    const onchangehandel = (e) => {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    /*
    // First method by jsonplaceholder
    const onsubmithandel = (e) => {
        
        
        e.preventDefault();
        fetch('https://vivek-8d814-default-rtdb.firebaseio.com/customer.json', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setformvalue({ name: "", email: "", password: "", number: "" });
                swal({
                    title: "Success",
                    text: "Registration Success",
                    icon: "success",
                    button: "Aww yiss!",
                });
            });
    }
    */
    

    // Second method by axios
    const onsubmithandel = async (e) => 
    {   
       e.preventDefault();  
       const res= await axios.post(`https://vivek-8d814-default-rtdb.firebaseio.com/customer.json`,formvalue);
       if(res.status==200)
       {
        setformvalue({ name: "", email: "", password: "", number: "" });
        swal({
            title: "Success",
            text: "Registration Success",
            icon: "success",
            button: "Aww yiss!",
        });
       }
    }

    //=====================================================================

    const [data, setData] = useState([]);
    
    /*
    // first method
    const getdata = (e) => {

        fetch('https://vivek-8d814-default-rtdb.firebaseio.com/customer.json')
            .then((response) => response.json())
            .then((json) => {
                //console.log(json)
                setData(json);

            });
    }
    */

     // second method

    const getdata = async (e) => {
        const res= await axios.get(`https://vivek-8d814-default-rtdb.firebaseio.com/customer.json`);
        if(res.status==200)
        {
            setData(res.data);
        }
    }

    useEffect(() => {
        getdata();
    }, [])


    return (
        <div>
            {/* Contact Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Signup Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Signup Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <form method="post" >
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="text" value={formvalue.name} name="name" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" value={formvalue.email} name="email" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" value={formvalue.password} name="password" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" value={formvalue.number} name="number" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your number" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" onClick={onsubmithandel} type="submit">Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-light mb-5 p-5">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(data).map((item,index)=>{
                                                const {name,email,number}=data[item]        
                                                return(
                                                    <tr>
                                                        <td>{item}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{number}</td>
                                                    </tr>   
                                                )
                                            })
                                       
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    )
}

export default Signup