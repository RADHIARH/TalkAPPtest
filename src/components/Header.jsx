import React from 'react';
import {FcInvite} from "react-icons/fc"
import {BsCircleFill} from "react-icons/bs";
import {BsFillCollectionFill} from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { addtolistfriend } from '../redux/actions';
import { acceptinvit } from '../redux/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Header = (props) => {
  const state=useSelector(state=>state.reducer);
  // useHistory
  const history=useHistory();
   // useDispatch
  const dispatch=useDispatch()
  // states
  const [invitation, setinvitation] = useState(false);
  // functions
  const gotoprofile=()=>{
   history.push(`/profile/${props.id}`)
    }
  const showinvitation=()=>{
        setinvitation(!invitation)   
   }
  const addfriend=(id,idfriend)=>{
    dispatch(acceptinvit(id,idfriend));
    dispatch(addtolistfriend(id,idfriend));
    alert("you're friends now");
    }

    return (
        <div>
          <div className="col-md-12 bg-black d-flex p-2" style={{position:"relative",marginLeft:"25px"}}>
            {state.users.filter(ele=>ele.id===props.id).map(e=>
            <>
              <div  key={e.id} className="col-md-5">
                <h3 className='   text-white fs-1 '  style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Talk APP  <img  alt="" src="https://icon-library.com/images/white-chat-icon/white-chat-icon-16.jpg" style={{width:"80px",height:"70px"}}/>
                </h3>
              </div>
              <div className="d-flex   " style={{ position:"absolute",right:"40px",marginTop:"20px"}}>  
                <div className=" col" style={{position:"relative",zIndex:"5"}}>
                  { e.invitations.filter(e=>e.accepted===false).reduce(
                    (acc, current) => (current.idf ? acc+1: acc),0) > 0?
                      <button className=' btn text-danger fw-bold '  onClick={()=>showinvitation()}style={{fontSize:"15px",width:"200px",marginRight:"0px"}}>
                        < FcInvite/>{e.invitations.filter(inv=>inv.accepted===false).reduce(
                          (acc, current) => (current.idf ? acc+1: acc),0)} new invitations</button>:null}
                            <div className="  bg-white mt-2 shadow " id="invitations" style={{position:"absolute",zIndex:"10"}}>
                              {invitation && e.invitations.map(user=>{
                                return (
                                  <div  key={user.id} style={{width:"200px"}}>
                                    {state.users.filter(element=>element.id===user.idf ).map(friend=>{
                                      return (
                                        <div className='d-flex' key={friend.id}>
                                          { user.accepted===false ?
                                              <>
                                                <img alt="" src={friend.img} className='avatar m-2'></img>
                                                  <p  className="mt-3 fw-bold" style={{fontSize:"10px"}}>{friend.username}</p>
                                                    <button className='btn btn-primary m-2'  onClick={()=>addfriend(e.id,friend.id)}style={{width:"60px",fontSize:"10px",height:"30px"}}>Confirm</button>
                                              </>:null}
                                        </div>
                                               )
                                           })}
                                  </div>
                                )
                            })
                    }     
                            </div>
                </div>      
              <div className="d-flex m-1 ">
                <img src={e.img} className="avatar " alt=""/> 
                  <h6 className='fw-bold' style={{color:"white",marginLeft:"5px"}}>{e.username} <BsCircleFill  style={{color:"green"}}/> </h6>
              </div>
              <div className=" text-success "  style={{visibility:"visible",marginTop:"5px"}}><h6>Online</h6>
              </div>
              <BsFillCollectionFill  onClick={()=>gotoprofile()} style={{color:"white",marginTop:"5px",marginLeft:"5px"}}/>                       
              </div> 
            </>
            )
      }
          </div>
        </div>
    );
}

export default Header;