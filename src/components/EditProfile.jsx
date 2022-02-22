import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editinfo } from '../redux/actions';

const Editprofile = (props) => {
    const state = useSelector((state) => state.reducer);
      // states
    const [show, setshow] = useState(true);
      //    useDispatch
    const dispatch=useDispatch()
    // functions
    const Edit=(id,username,email,phone)=>{
            dispatch(editinfo(id,username,email,phone))
          document.getElementById("alertmessage").style.visibility="visible"
           
    }
    const reset=()=>{
        setshow(false);
    }
    return (
        <div>
          {show===true?
            <div className=" shadow  "  style={{backgroundColor:"#BFBFBF"}}>
              <h4 className='text-center m-4' style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Edit Informations</h4>
                {state.users.filter(e=>e.id===props.id).map(user=>{
                      return(  
                      <>
                        <div className='d-flex' style={{marginTop:"15px",marginLeft:"10px"}}><label style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Username </label><input  id="username"type="text" defaultValue={user.username}className='form-control text-center' style={{width:"60%",marginLeft:"10px"}}/></div>
                        <div className='d-flex' style={{marginTop:"15px",marginLeft:"10px"}}><label style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Email </label><input type="text" id="email" defaultValue={user.email} className='form-control text-center' style={{width:"60%",marginLeft:"40px"}}/></div>
                        <div className='d-flex' style={{marginTop:"15px",marginLeft:"10px"}}><label style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Phone  </label><input  type="text"  id="phone" defaultValue={user.phone} className='form-control text-center' style={{width:"60%",marginLeft:"34px"}}/></div>
                        <div className="d-flex" style={{marginLeft:"75px",marginTop:"10px"}}>
                          <button className="btn  m-2"  style={{backgroundColor:"#FF64FF",fontFamily: 'Lobster Two, cursive'}} onClick={()=>Edit(user.id,document.getElementById("username").value,document.getElementById("email").value,document.getElementById("phone").value)}>Save Changes</button>
                          <button className="btn  m-2"  style={{backgroundColor:"#FF64FF",fontFamily: 'Lobster Two, cursive'}} onClick={()=>reset()}>Cancel</button>
                        </div>
                        <div class="alert alert-secondary text-success  "  id="alertmessage" style={{visibility:"hidden"}} role="alert">
                        Successfully  Saved <i class="fa-solid fa-circle-check"></i>
                        </div>
                       </>
                               )
                  })
                  }
            </div>
           :null }
        </div>
    );
}

export default Editprofile;
