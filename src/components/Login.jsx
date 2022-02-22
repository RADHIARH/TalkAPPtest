import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Singin from './SingIn';
import { Online } from '../redux/actions';
import { Authentication } from '../redux/actions';

const Login = (props) => {
  //  access data from store
  const state = useSelector((state) => state.reducer);
  // states
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [singIn, setsingIn] = useState(false);
//  use History
  const history=useHistory();
// use Dispatch
  const dispatch=useDispatch();
  // // functions
  // login
  const Login=(em,pass)=>{
      const t=state.users.filter(e=>e.email===em && e.password===pass);
      if(t.length!==0 ){
      dispatch(Authentication());
      history.push(`/listusers/${t[0].id}`);
      dispatch(Online(em,pass));
      }
      else
       document.getElementById("alertmessage").style.visibility="visible"
      }
  // sign in
   const SignIn=()=>{
    setsingIn(!singIn)
                    }
    return (
      <div>
        {/* login  */}
        <div className="col-md-6  offset-md-3 shadow   "  style={{marginTop:"20px",border:"2px double black",borderRadius:"30px",backgroundColor:"#8D93A6"}}>
          <div className="d-flex justify-content-center">
             <h1 className='text-black ' style={{fontFamily: 'Dancing Script, cursive'}}>Talk APP  <img src="https://icon-library.com/images/white-chat-icon/white-chat-icon-16.jpg" style={{width:"100px",height:"90px",marginTop:"10px"}}/></h1>
          </div>
          <div className="form m-4">
            <div className="d-flex " style={{marginBottom:"20px",marginLeft:"35px"}}>
              <label className="label-control  fs-4  m-2" style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Email</label>
              <input type="text" className="form-control"  placeholder='Please enter your email' onChange={event=>setemail(event.target.value)} />
            </div>
            <div className="d-flex " style={{marginBottom:"20px"}}>
              <label className="label-control fs-4  m-2" style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Password</label>
              <input type="password" className="form-control"  placeholder='Please enter your password' onChange={event=>setpassword(event.target.value)} />
            </div>
            <div className=" d-flex justify-content-center">
                <button className="btn " style={{fontFamily: 'Lobster Two, cursive',backgroundColor:"#FF64FF"}}  onClick={()=>Login(email,password)}>Submit</button>              
            </div>
            <div className="alert alert-danger text-danger mt-2 text-center "  id="alertmessage" style={{visibility:"hidden"}} role="alert">password or username is incorrect
            </div>
          </div>
        {/* sign in */}
        <div className=" d-flex  justify-content-center">
            <button className='btn  fs-2 m-4' onClick={()=>SignIn()} style={{color:"black",textDecoration:"none",fontFamily: 'Dancing Script, cursive',borderColor:"white !important",backgroundColor:"#FF64FF"}}> Create an account</button>
        </div>
            { singIn===true?
            <div  style={{width:"80%"}}>
            <Singin/>
            </div>:
            null}
        </div>
      </div>
    );
}
export default Login;
