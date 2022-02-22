import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {AiFillDelete}  from "react-icons/ai";
import {TiTickOutline} from "react-icons/ti";
import {TiTick} from "react-icons/ti";
import {BsCircleFill} from "react-icons/bs";
import {AiOutlinePlusCircle} from  "react-icons/ai"
import {CgSmileSad} from "react-icons/cg";
import { addmessage } from '../redux/actions';
import { addgroup } from '../redux/actions';
import { deletemsg } from '../redux/actions';
import { addmember } from '../redux/actions';
import { sendMessageGroup } from '../redux/actions';
import { Leavegroup } from '../redux/actions';
import { Viewmessage } from '../redux/actions';
import { sendInvit } from '../redux/actions';
import Header from './Header';
import {useParams } from 'react-router-dom';
import InputEmoji from "react-input-emoji";

const Listusers = () => {
        // connect to store
       const state = useSelector((state) => state.reducer);
        // useparams
       const {idd}=useParams();
       const iduse=parseInt(idd);
        // states
       const [grouptoshow, setgrouptoshow] = useState([]);
       const [showg, setshowg] = useState(false);
       const [filter, setfilter] = useState(state.users);
       const [user, setuser] = useState([]);
       const [ms, setms] = useState();
       const [show, setshow] = useState(false);
       const [group, setgroup] = useState(false);
    // Dispatch
       const dispatch=useDispatch();
    // search user
        const searchUser=(user)=>{
            const tab=state.users.filter(el=>el.username.toUpperCase().includes(user.toUpperCase()));
            setfilter(tab);
                                  }
       // /showuser
        const showUser=(idd)=>{
              const t=state.users.filter(element=>element.id===idd);
              setuser(t);
              setshow(true);
              const idmessage=state.messages.map((e,i)=>e.from===idd && e.to===iduse? i :"").filter(String); 
              dispatch(Viewmessage(idmessage))
    }
        // Sendmessage
        const sendMessage=(m,idsend,idreceive)=>{
          dispatch(addmessage(m,idsend,idreceive));    
    }
    // send invitation
        const sendinvitation=(sender,receiver)=>{
        dispatch(sendInvit(sender,receiver))
            
    }
    // addtolistfriends
        const addgroupname=()=>{
       setgroup(!group)
    }
    // add new group
        const addgrp=(name)=>{
            dispatch(addgroup(name))
            document.getElementById("groupname").style.value=""
}
        const hover=(id)=>{
           document.getElementById(id).style.visibility="visible";
    }
    // show group
        const showgroup=(idg)=>{
            const gr=state.groups.filter(e=>e.id===idg)
            console.log(gr[0].name.toLowerCase().slice(0,1))
            setgrouptoshow(gr)
            setshowg(true)
            setshow(false)
    }
    // // deletemessage
        const deletems=(id)=>{
            dispatch(deletemsg(id))
    }
    // join group
        const joingroup=(iduser,idg)=>{
            dispatch(addmember(iduser,idg))
            //   setshowg(true)
            alert("Done...")
    }
    // leave group
        const Leavegrp=(idgroup,idmember)=>{
            dispatch(Leavegroup(idgroup,idmember))
            //  setshowg(false)
            alert("Done...")
    }
    // sendmessagetogroup
        const sendMessageToGroup=(idgroup,idmember,message)=>{
            dispatch(sendMessageGroup(idgroup,idmember,message))
        }

    return (
        <div>
            <div className="row d-flex justify-content-center" >
                <Header id={iduse} />
            </div>
            <div className="d-flex col-md-12 " >
                 {/* list users  part 1 */}
                <div className="col-md-2  mt-4 listusers bg-white  shadow" style={{border:"3px solid black"}} >
                    <input
                      type="text"
                      className="form-control m-2"
                      id="exampleFormControlInput1"
                      placeholder=" search a user"
                      defaultValue=""
                      style={{width:"90%",border:"2px solid black"}}
                      onChange={event=>searchUser(event.target.value)}
                     />
                    <div className="col mt-4 mb-4 ">
                        {filter.filter(user=>user.id!==iduse).map(ele=>{
                            return(
                            <div className='row m-1' key={ele.id} style={{width:"200px"}}>
                                <button className="btn btn-outline-dark mt-2 "   onClick={()=>showUser(ele.id)} style={{border:"none" ,height:"45px"}}>
                                    <img src={ele.img}  alt ="" className='avatar'/><BsCircleFill className='m-1 '  style={{color:ele.actif===true?"green":"red"}} onMouseOver={()=>document.getElementById(ele.username).style.visibility="visible"} onMouseLeave={()=>document.getElementById(ele.username).style.visibility="hidden"}/>{ele.username.substr(0,11)} 
                                {state.messages.reduce(
                                    (acc, current) => (current.from===ele.id && current.to===iduse && current.vue===false  ? acc+1: acc),0)>0 ? 
                                        <p style={{fontSize:"13px",color:"green",fontWeight:"bold"}}>
                                            {state.messages.reduce(
                                                (acc, current) => (current.from===ele.id && current.to===iduse && current.vue===false  ? acc+1: acc),0)} new messages
                                        </p>  
                                        : null
                                }       
                               <div className="bg-black text-white"  id={ele.username}style={{visibility:"hidden",width:"150px"}}><h6>{ele.actif===true?" is online":" is offline"}</h6>
                               </div>
                               </button>
                            </div>
                                        )
                                    })
                        }
                    </div>
                </div>
                {/* ShowUser part 2  */}
                <div className="col-md-8 m-4" style={{position:"relative", backgroundColor:"#FF64FF",border:"3px solid grey"}}>
                    {show ===true? 
                    <div className='userDiscuss'>
                    {user.map(element=>(
                        <>
                            <div className="card col-md-4 mt-4  offset-md-4 bg-light" key={element.id} style={{}} >
                                <div className="card-header justify-content-center d-flex" > <img  alt ="" src={element.img} className='avatar'/><h5 style={{marginLeft:"10px"}}>{element.username}</h5>
                                </div>
                                <div className="card-body text-center">{element.email}
                                    {state.FriendsList.find(e=>e.friend1===iduse && e.friend2===element.id || e.friend1===element.id && e.friend2===iduse)? <h6> Friend <TiTick/></h6>: 
                                        state.users.filter(e=>e.id===element.id).find(el=>{
                                        return (
                                        el.invitations.find(user=>user.idf===iduse && user.accepted===false))
                                    })?
                                    <label className='form-label'>Invitation sent</label>:
                                    <input type="button" className="btn btn-outline-dark  fw-bold"   onClick={()=>sendinvitation(iduse,element.id)}  value=" Add to Friends List"style={{width:"150px",fontSize:"13px" ,marginTop:"10px"}}/>                   
                     }
                                </div>  
                            </div>
                             
                     {/* show messages */}
                            <div className='col' style={{marginTop:"20px",marginBottom:"55px",marginLeft:"40px"}}>
                           {
                               state.messages.map(el=>{
                                   return(
                                       el.to===element.id && el.from===iduse?
                                       <div className='d-flex'>
                                            <div className='row m-3 shadow '  onMouseOver={()=>document.getElementById(el.msg).style.visibility="visible"  } onMouseLeave={()=>document.getElementById(el.msg).style.visibility="hidden" } style={{ borderRadius:"10px",backgroundColor:"#CCCCCC",width:"350px",height:"50px"}}>
                                                <div className="col"> 
                                                    <h5 className='mt-2'>{el.msg} </h5>
                                                </div>
                                                <div className=" col-md-3 d-flex" id={el.msg} style={{ visibility:"hidden",marginTop:"10px"}}>
                                                  <AiFillDelete  className="m-2" onClick={()=>deletems(el.id)}  style={{width:"100px"}}/>
                                                </div>
                                            </div>
                                            <div className="row mt-3"><p className='p-2'>  
                                            {el.vue===false? <TiTickOutline style={{fontSize:"20px"}} />:<TiTick style={{fontSize:"20px"}}/> }</p></div>   
                                            </div>
                                            : el.from===element.id && el.to===iduse?
                                            <div className='row' style={{ marginLeft:"300px", marginTop:"20px",width:"450px",height:"50px",borderRadius:"10px"}} >
                                                <div className="col-md-3"> 
                                                    {state.users.filter(e=>e.id===el.from).map(el=>{
                                               return(
                                                   <h6 className='mt-3'>{el.username.split(" ")[1]}</h6>
                                                            )
                                                    })
                                                    }
                                                </div>
                                                <div className="col  shadow bg-light" style={{ borderRadius:"10px"}}> <h5 className='mt-2'>{el.msg}</h5></div> 
                                                </div>
                                                :null
                                                        )
                                                    })
                                                }
                                            </div>
                                         {/* send message to friend */}
                                         {state.FriendsList.find(e=>e.friend1===iduse && e.friend2===element.id || e.friend1===element.id && e.friend2===iduse)?
                                            <div className=' row d-flex' style={{width:"720px",position:"absolute",bottom:"0px",marginLeft:"80px" }}>
                                                <InputEmoji
                                                    onChange={setms}
                                                    cleanOnEnter
                                                    onEnter={()=>sendMessage(ms,iduse,element.id)}
                                                    placeholder="Type a message"
                                                    id="message"/>
                                            </div>
                                        :null}
                        </>))
                             }
                        </div>
                    :showg===true  && show===false?
                    // group card description part 3
                    <div className='groupDiscuss'>
                        {grouptoshow[0].members.find(e=>e===iduse)?
                          grouptoshow.map(el=>{
                                    return (
                                        <div className='col-md-8'>
                                            <div className="col-md-6  offset-md-4 mt-4">
                                                <div className="card" >
                                                    <div className="card-header    text-center fs-4">
                                                        <h4 className=''> <span className='fw-bold'>  {el.name} </span>Group</h4>
                                                    </div>
                                                    <div className="card-body  ">
                                                        <h6>members:  </h6>
                                                        <hr className="dropdown-divider" />
                                                    <div className='row' style={{marginTop:"20px",marginBottom:"55px",marginLeft:"5px"}}>
                                                        {el.members.map(member=>{
                                                            return(
                                                            <>
                                                            {state.users.filter(element=>
                                                                element.id===member).map(user=>{
                                                                    return(
                                                                        <div className='col-md-3' >
                                                                            <div><img  alt ="" src={user.img} className="avatar"  onMouseOver={()=>document.getElementById(user.id).style.visibility="visible"} onMouseLeave={()=>document.getElementById(user.id).style.visibility="hidden"} /></div> 
                                                                            <div id={user.id} style={{visibility:"hidden"}}>< p style={{fontSize:"10px",fontWeight:"500"}}>{user.username}</p></div>
                                                                        </div>)
                                                                })
                                                            }
                                                            </>
                                                            )
                                                                }
                                                                )
                                                        }
                                                    </div> 
                                                    </div>
                                                </div>
                                            </div >
                           {/*  group discussion */}
                                            <div className=' col m-5 '>
                                               { 
                                                    grouptoshow.map(el=>{
                                                        return(       
                                                        <div className='d-flex'>
                                                            <div className="col mb-4"> 
                                                            {el.messages.map(msg=>{
                                                            return(
                                                                <>
                                                                {state.users.filter(user=>user.id===msg.member).map(element=>{
                                                                    return(     
                                                                <div className="row mb-4"> 
                                                                    <div className="col-md-2">
                                                                    </div>
                                                                      { 
                                                                    element.id===iduse?
                                                                        <div className="col-md-4">  <h6>Vous</h6>
                                                                        </div>
                        :
                                                                <div className="col-md-4">  <h6>{element.username}</h6>
                                                                </div>
                                                                }
                                                                <div className="row" > 
                                                                     <div className='col-md-2' ><img  alt ="" src={element.img} className='avatar2'/>
                                                                     </div> 
                                                                     <div className="col-md-8 p-2 shadow" style={{ borderRadius:"10px",backgroundColor:"#CCCCCC",height:"50px"}}> <h5>{msg.message}</h5></div>
                                                                     </div>
                                                                </div>
                                                                        )
                                                                    } 
                                                                    )
                                                                }
                                                                </>
                                                                    )
                                                                })} 
                                                                </div>
                                                        </div>      
                                                                )
                                                            })
                                                        }
                                            </div>
                                            {/* send message to group */}
                                            <div className='d-flex ' style={{width:"720px",position:"absolute",bottom:"0px",marginLeft:"45px" }}>
                                                <InputEmoji
                                                    onChange={setms}
                                                    cleanOnEnter
                                                    onEnter={()=>sendMessageToGroup(el.id,iduse,ms)}
                                                    placeholder="Type a message"
                                                    id=""/>
                                            </div>
                                            </div>
                 )
                 
             })
                    :<h4 className='text-center m-4 ' style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Sorry <CgSmileSad/>.....you must join the group to show discussion </h4> }
                    </div>
                 : null} 
            </div>
            {/* groups list */}
            <div className="col-s-4 mt-4 shadow bg-white" style={{border:"3px solid black",position:"relative"}}>
                <h3 className='text-center m-1' style={{fontFamily: 'Lobster Two, cursive',color:"black"}}>Groups</h3>
                <hr style={{height:"3px",color:"black"}}></hr>
            <div>
            {
                state.groups.map(e=>{
                    return(
                    <>
                        <div className="d-flex m-2" >
                            <button onClick={()=>showgroup(e.id)} onMouseOver={()=>hover(e.name)} onMouseLeave={()=>  document.getElementById(e.name).style.visibility="hidden"} className="  btn btn-dark  text-center avatar  border-2"  style={{width:"50px" ,height:"50px",borderRadius:"50%"}}><i className={`fa-solid fa-${e.name.toLowerCase().slice(0,1)} ` } style={{fontSize:"25px"}}></i></button>
                            <div className="col shadow  p-2 bg-black" id={e.name}  style={{ width:"60px",height:"40px",visibility:"hidden",borderRadius:"10px"}}>
                             <h6 className='text-white'>{e.name.slice(0,7)}</h6>   
                            </div>
                                {e.members.find(e=>e===iduse)?
                                <input type="button" className='btn btn-dark text-white mt-1'  value="Leave" onClick={()=>Leavegrp(e.id,iduse)}style={{width:"60px",height:"40px",fontSize:"15px",marginLeft:"15px",visibility:"visible",position:""}  }/>
                                : <input type="button" className='btn btn-dark text-white mt-1'  value="Join" id={e.id} onClick={()=>joingroup(iduse,e.id)}style={{width:"60px",height:"40px",fontSize:"15px",marginLeft:"17px",visibility:"visible",position:""}  }/>
                                }
                        </div>
                    </>
                            )
                        })
            }
                </div>
                <div className="d-flex " style={{position:"absolute",bottom:"5px",left:"20px"}}>
                  <button className='btn btn-outline-dark border-0'> <AiOutlinePlusCircle  onClick={()=>addgroupname()}  style={{width:"40px",height:"50px",color:"green"}}/>
                   Add new group</button>
                </div>
                    {group===true?(
                        <div className='d-flex m-2'>
                            <input className='' type="text"  id="groupname" style={{width:"70%",border:"2px solid black"}}  placeholder="add a group name " />
                            <button   className='btn btn-outline-dark' onClick={()=>addgrp(document.getElementById("groupname").value)} style={{marginLeft:"10px",border:"2px solid black"}}>Add</button>
                        </div>
                            )
                            :null}
            </div>
        
            </div>
        </div>
    );
}

export default Listusers;
