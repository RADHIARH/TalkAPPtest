import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import SingIn from './SingIn';
import { Online } from '../redux/actions';
import { Authentication } from '../redux/actions';

const Login = (props) => {
  //  access data from store
  const state = useSelector((state) => state.reducer);
  // states
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [values, setvalues] = useState({
    email:"",
    password:""
  });
  const [user, setuser] = useState([]);
  const [singIn, setsingIn] = useState(false);
  const [list,setlist]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{

    }
    catch (err){

    }
  }
  const getdata=async()=>{
    const res=await fetch ("/users");
    const listdata=await res.json();
    console.log(listdata);
    setlist(listdata);
    
  }
  // useEffect(() => {
  //     getdata();
  //     console.log(list)
  //  }, []);
   
//  use History
  const history=useHistory();
// use Dispatch
  // // functions
  // login
  const login=async(e)=>{
    e.preventDefault();
      const response=await fetch ("/login",{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          email,password
        }),
      });
      const tab=[];
      const data= await response.json();
      const user=JSON.stringify(data.user);
      tab.push(user)
      
      
      // save token in the localStorage
      
    if(user){
      localStorage.setItem('TK',data.token);
      localStorage.setItem('user',tab)
      localStorage.setItem('iduser',data.user._id)
      history.push(`/listusers`);
    }
     else{document.getElementById("alertmessage").style.visibility="visible"}
    }
  // sign in
   const SignIn=()=>{
    // setsingIn(!singIn)
    history.push('/signIn')
                    }
    return (
      <div>
        {/* login  */}
        <div className="col-md-6  offset-md-3 shadow   "  style={{marginTop:"20px",border:"2px double black",borderRadius:"30px",backgroundColor:"#8D93A6"}}>
          <div className="d-flex justify-content-center">
             <h1 className='text-black ' style={{fontFamily: 'Dancing Script, cursive'}}>Talk APP  <img src="https://icon-library.com/images/white-chat-icon/white-chat-icon-16.jpg" style={{width:"100px",height:"90px",marginTop:"10px"}}/></h1>
          </div>
          <form onSubmit={(e)=>login(e)}>
          <div className="form m-4">
            <div className="d-flex " style={{marginBottom:"20px",marginLeft:"35px"}}>
              <label className="label-control  fs-4  m-2" style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Email</label>
              <input type="text" name="email"  value={email} onChange={e=>setemail(e.target.value)} className="form-control"  placeholder='Please enter your email'  />
            </div>
            <div className="d-flex " style={{marginBottom:"20px"}}>
              <label className="label-control fs-4  m-2" style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Password</label>
              <input type="password"    value={password} name="password"  onChange={e=>setpassword(e.target.value)}  className="form-control"  placeholder='Please enter your password'  />
            </div>
            <div className=" d-flex justify-content-center">
                <button className="btn "  type="submit" style={{fontFamily: 'Lobster Two, cursive',backgroundColor:"#FF64FF"}}  >Submit</button>              
            </div>
            <div className="alert alert-danger text-danger mt-2 text-center "  id="alertmessage" style={{visibility:"hidden"}} role="alert">password or username is incorrect
            </div>
          </div>
          </form>
        {/* sign in */}
        <div className=" d-flex  justify-content-center">
            <button className='btn  fs-2 m-4' onClick={()=>SignIn()} style={{color:"black",textDecoration:"none",fontFamily: 'Dancing Script, cursive',borderColor:"white !important",backgroundColor:"#FF64FF"}}> Create an account</button>
        </div>
            {/* { singIn===true?
            <div  style={{width:"80%"}}>
            <SingIn/>
            </div>:
            null} */}
            
        </div>
       
      </div>
    );
}
export default Login;
