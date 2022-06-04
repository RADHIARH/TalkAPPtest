import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/actions';
import { useHistory } from 'react-router-dom';
const Singin = () => {
    // useDispatch
    const dispatch=useDispatch();
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState();
  const history=useHistory();

        // states
    const [show, setshow] = useState(true);
    // functions 
    const sign= async(e)=>{
        e.preventDefault();
        try{

         await fetch("/register",{
                 method:'POST',
                headers:{
                 'Content-type':'application/json'
                         },
                body:JSON.stringify({
               username,email,password,phone
        }),
            })
             history.push('/');
        }
        
        catch (err){
console.log(err)
        }
        // dispatch(adduser(username,email,password,phone,img))
        // alert(`Welcome .....${document.getElementById("username").value}`);
        setshow(false)
       
                                                       }
    return (
        <div className='col-md-6  offset-md-3 shadow' style={{backgroundColor:"#8D93A6" ,marginTop:'100px',padding:'60px'}}>
            {show===true?
            <form   onSubmit={e=>sign(e)}  >
               <input type="text" className="form-control m-3" style={{width:'80%'}}   value={username}  onChange={(e)=>setusername(e.target.value)} id="username" placeholder='Please enter your username'  />
               <input type="text" className="form-control m-3"  style={{width:'80%'}}  value={email}  onChange={(e)=>setemail(e.target.value)}  id="email" placeholder='Please enter your email' />
               <input type="text" className="form-control m-3"    style={{width:'80%'}}value={phone}  onChange={(e)=>setphone(e.target.value)}  id="phone" placeholder='Please enter your phone number'  />
               <input type="password" className="form-control m-3" style={{width:'80%'}}  id="password"  value={password} onChange={e=>setpassword(e.target.value)} placeholder='Please enter your password'  />
               <div className="d-flex justify-content-center " style={{marginBottom:"20px"}}>
                   <div className="d-flex justify-content-center">
                       <button className="btn" type='submit'  style={{backgroundColor:"#FF64FF"}}>Sign IN</button>
                    </div> 
               </div>
            </form>
        :null}
        </div>
    );
}

export default Singin;
