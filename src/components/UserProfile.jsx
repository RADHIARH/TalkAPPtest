import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TiDelete} from "react-icons/ti";
import {AiFillEdit} from "react-icons/ai";
import { useState } from 'react';
import EditProfile from './EditProfile';
import EditPicture from './EditPicture';
import {BsXCircle}  from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import Editpass from './Editpass';
import { useParams } from 'react-router-dom';
import { Offline } from '../redux/actions';
import { removeFriend } from '../redux/actions';
import { Logout } from '../redux/actions';

const Userprofile = () => {
    const state = useSelector((state) => state.reducer);
    // useParams
    const {idu}=useParams();
    const iduse=parseInt(idu);
    //  useHistory
     const history=useHistory()
    //  states
    const [show, setshow] = useState(false);
    const [editpic, seteditpic] = useState(false);
    const [editpassword, seteditpassword] = useState(false);
    // useDispatch
    const dispatch=useDispatch()
    // functions
    const Edit=()=>{
    setshow(!show);
    seteditpassword(false)
                      }
    const Editpicture=()=>{
    seteditpic(!editpic)
                            }
    const removefriendfromlist=(iduser,idfriend)=>{
        dispatch(removeFriend(iduser,idfriend))
    alert("Done...")
    }
    const gotohome=()=>{
    history.push(`/listusers/${iduse}`)
                        }
    const EditPassword=()=>{
    seteditpassword(!editpassword);
    setshow(false)
                           }
    const SignOut=(em,pass)=>{
        dispatch(Logout());
    history.push('/');
    dispatch(Offline(em,pass))
    }
    return (
        
        <div className='d-flex '>
               <div className="col-md-4   " style={{marginTop:"50px"}}>
                    {
                        editpic&&<EditPicture id={iduse}/>
                    }
                </div>
            <div className=" col-md-4 " >
                <div className=" card   m-5 " >
                    {state.users.filter(user=>user.id===iduse).map(el=>{
                              return(
                                <>
                                  <h5 className='text-center'>My Account</h5>
                                  <div className="card-header text-center" style={{backgroundColor:"#FF64FF"}}>
                                        <img src={el.img}  alt =" " className="useravatar"/>
                                        <h5>{el.username}</h5>
                                        <button className='btn btn-outline-dark fw-bold' onClick={()=>Editpicture()} style={{marginLeft:"10px",fontSize:"10px",height:"40px"}} ><AiFillEdit/>Edit Profile Picture</button>
                                  </div>
                                  <div className="card-body "  style={{backgroundColor:"#F2F2F2"}}>
                                    <div className='d-flex'>
                                      <h6>Email :{el.email}</h6>
                                    </div>
                                    <hr className="dropdown-divider" />
                                    <h6>Friends List</h6>
                                    <div>
                                    {state.FriendsList.find(e=>e.friend1===iduse)? 
                                    state.FriendsList.filter(e=>e.friend1===iduse).map(e=>{
                                        return(
                                          <div className='row'>
                                          {state.users.filter(el=>el.id===e.friend2).map(user=>{
                                        return(
                                            <>
                                            <div className ='col-md-11 m-1 d-flex  shadow'  style={{border:"1px solid #BFBFBF"}} key={user.id}>
                                                <div className="col-md-3 m-2">
                                                       <button className="btn btn-outline-dark  " style={{border:"none"}}> <img  alt ="" src={user.img}  className='avatar2'/>
                                                </button>
                                                </div>
                                                <div className="col-md-5 mt-4 ">
                                                    <h6  id={user.username}style={{fontSize:"15px",visibility:"visible"}}>{user.username}</h6>
                                                </div>
                                                <div className="col-md-3 m-2 mt-4">
                                                     <TiDelete style={{fontSize:"25px",marginBottom:"15px",float:"right"}} onClick={()=>removefriendfromlist(iduse,user.id)}/>
                                                </div> 
                                            </div>
                                                   </> )
                                                })}                  
                                            </div>
                                                        ) 
                                                    }):  
                                          state.FriendsList.find(element=>element.friend2===iduse)
                                                    ? 
                                                     state.FriendsList.filter(friend=>friend.friend2===iduse).map(e=>{
                                        return(
                                        <div className='row'>
                                          {state.users.filter(el=>el.id===e.friend1).map(user=>{
                                        return(
                                            <div className='col-md-11 m-1 d-flex  shadow' style={{border:"1px solid #BFBFBF"}}>
                                                <div className="col-md-3 m-2 ">
                                                    <button className="btn btn-outline-dark " style={{border:"none"}}> <img alt="" src={user.img} 
                                                className='avatar2'/>
                                                    </button>
                                                </div>
                                                <div className="col-md-5 mt-4 "> <h6 id={user.username}style={{fontSize:"15px",visibility:"visible"}}>{user.username}</h6>
                                                </div>
                                                <div className="col-md-3 m-2 mt-4">   <TiDelete style={{fontSize:"25px",marginBottom:"15px",float:"right"}} onClick={()=>removefriendfromlist(user.id,iduse)}/>
                                                </div> 
                                            </div>
                                                    )
                                                })}                  
                                        </div>
                                                        ) 
                                                    }):null}
                                        </div>
                                            <hr className="dropdown-divider" />
                                            <div className="d-flex m-4">
                                                <button className='btn btn-outline-dark fw-bold'  onClick={()=>Edit()} style={{marginLeft:"10px",fontSize:"10px",height:"40px"}}><AiFillEdit/>Edit Profile Info</button>
                                                <button className='btn btn-outline-dark fw-bold'  onClick={()=>EditPassword()} style={{marginLeft:"10px",fontSize:"10px",height:"40px"}}><AiFillEdit/>Edit Password</button>
                                            </div>
                                           <hr className="dropdown-divider" />
                                             {state.users.filter(user=>user.id===iduse).map(el=>{
                                                        return(
                                                        <div className="btn d-flex justify-content-center" style={{backgroundColor:"#FF64FF",fontFamily: 'Lobster Two, cursive'}}  onClick={()=>SignOut(el.email,el.password)} >SignOut
                                                        </div>)})}
                                  </div>
                                                        </>)

                                                    })} 
                </div>
                                            
            </div>
                <div className="col-md-4" style={{marginTop:"50px"}}>
                    {
                        show===true ?<EditProfile id={iduse}/>:editpassword===true?<Editpass id={iduse}/>:null
                    }
                </div>
                <div>
                 <button className='btn btn-dark p-1 ' style={{width:"50px",height:"45px"}}> <BsXCircle onClick={()=>gotohome()} style={{fontSize:"30px"}}/></button> 
               </div>
        </div>


    
    );
}

export default Userprofile;
