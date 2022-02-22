import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/actions';
const Singin = () => {
    // useDispatch
    const dispatch=useDispatch();
        // states
    const [show, setshow] = useState(true);
    // functions 
    const sign=(username,email,password,phone,img)=>{
        dispatch(adduser(username,email,password,phone,img))
        alert(`Welcome .....${document.getElementById("username").value}`);
        setshow(false)
                                                       }
    return (
        <div>
            {show===true?
            <div className="form" style={{marginLeft:"150px"}} >
               <input type="text" className="form-control m-3"   id="username" placeholder='Please enter your username'  />
               <input type="text" className="form-control m-3" id="email" placeholder='Please enter your email' />
               <input type="text" className="form-control m-3"  id="phone" placeholder='Please enter your phone number'  />
               <input type="password" className="form-control m-3"  id="password" placeholder='Please enter your password'  />
               <div className="d-flex justify-content-center " style={{marginBottom:"20px"}}>
                   <div className="d-flex justify-content-center">
                       <button className="btn "  style={{backgroundColor:"#FF64FF"}}onClick={()=>sign(document.getElementById("username").value,document.getElementById("email").value,document.getElementById("password").value,document.getElementById("phone").value,"https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg")}>Sign IN</button>
                    </div> 
               </div>
            </div>
        :null}
        </div>
    );
}

export default Singin;
