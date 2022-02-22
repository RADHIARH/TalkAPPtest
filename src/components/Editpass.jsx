import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editpassword } from '../redux/actions';


const Editpass = (props) => {
     const state = useSelector((state) => state.reducer);
    //  states
     const [show, setshow] = useState(true);
    //  useDispatch
     const dispatch=useDispatch();
    //  functions
     const Editpassword=(id,ps)=>{
         const t=state.users.filter(el=>el.id===id);
         const pass=t[0].password;
         if(pass===document.getElementById("lastpass").value){
         dispatch(editpassword(id,ps),
            document.getElementById("alertmessage").style.visibility="visible")}
         else
         document.getElementById("errorpassword").innerText="Last password is incorrect"   
     }
       const reset=()=>{
        setshow(false);
    }
    return (
        <div>
            {show===true?
            <div className=" shadow " style={{backgroundColor:"#BFBFBF"}}>
                <h4 className='text-center m-4' style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Edit Password</h4>
                    {state.users.filter(e=>e.id===props.id).map(user=>{
                      return(  
                      <>
                        <div className='d-flex' style={{marginTop:"15px",marginLeft:"15px"}}><label style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Last Password </label><input type="password"  id="lastpass" className='form-control' style={{width:"60%",marginLeft:"44px"}}/>
                        </div>
                        <div className='d-flex' style={{marginTop:"15px",marginLeft:"15px"}} ><label style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>New Password </label><input type="password" id="ps" className='form-control' style={{width:"60%",marginLeft:"40px"}}/>
                        </div>
                        <div className=" text-danger " style={{marginLeft:"150px"}}>  <label id="errorpassword" ></label>
                        </div> 
                        <div className="d-flex "  style={{marginLeft:"140px"}}>
                            <button className="btn  m-2" style={{backgroundColor:"#FF64FF",fontFamily: 'Lobster Two, cursive'}} onClick={()=>Editpassword(user.id,document.getElementById("ps").value)}>Save Changes</button>
                            <button className="btn  m-2"  style={{backgroundColor:"#FF64FF",fontFamily: 'Lobster Two, cursive'}} onClick={()=>reset()}>Cancel</button>
                        </div>
                        <div class="alert alert-secondary text-success"  id="alertmessage" style={{visibility:"hidden"}}role="alert">
                        Successfully  Saved <i class="fa-solid fa-circle-check"></i>
                        </div>
                      </>
                                            )
                                })
                 }
            </div>  :null}
       </div>
    );
}

export default Editpass;
