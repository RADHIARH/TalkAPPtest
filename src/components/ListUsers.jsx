import React from 'react';
import { useState } from 'react';
import {useEffect } from 'react';
import axios from 'axios';
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
       const iduse=localStorage.getItem('iduser')
        // states
       const [grouptoshow, setgrouptoshow] = useState([]);
       const [message, setmessage] = useState();
       const [receiver, setreceiver] = useState();
       const [showg, setshowg] = useState(false);
       const [users, setusers] = useState([]);
       const [filter, setfilter] = useState([ {
        "_id": "62994c9b02edc8d4743075ae",
        "username": "Radhia Rahmani",
        "email": "radhiarahmani.info@gmail.com",
        "password": "$2a$10$ku3DqrQBWlICCTgeTQ77L.CX.1D6iiGWRllGXpIBoR562Iv8j8TsO",
        "actif": false,
        "img": "https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg",
        "phone": 54227098,
        "invitations": [
            {
                "idfriend": "629b6ca1aed340c25c51a1eb",
                "accepted": true
            }
        ],
        "friendsList": [
            {
                "idfriend": "62994ebf8a13b93a50ca7247"
            },
            {
                "idfriend": "62994d848a13b93a50ca6f9f"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "62994d848a13b93a50ca6f9f",
        "username": "Eya Slimeni",
        "email": "eya.sl@gmail.com",
        "password": "$2a$10$obPyw7goFK2VLjNRLiqarO3u41wp8DT6mEuPmV3B9cqLtgaB/HfBm",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 23147789,
        "invitations": [
            {
                "idfriend": "62994c9b02edc8d4743075ae"
            }
        ],
        "friendsList": [
            {
                "idfriend": "62994c9b02edc8d4743075ae"
            },
            {
                "idfriend": "6299fd6798d6a5148ca7c6d4"
            },
            {
                "idfriend": "6299fd6798d6a5148ca7c6d4"
            },
            {
                "idfriend": "6299fd6798d6a5148ca7c6d4"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "62994ebf8a13b93a50ca7247",
        "username": "Mourad ben ayed",
        "email": "mourad.ay@gmail.com",
        "password": "$2a$10$XHzfzxPb3Ps7B21vhoRecOBp5qgnxgQ0oey5WKsaIHadMp4MS.FUC",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 54788200,
        "invitations": [
            {
                "idfriend": "62994c9b02edc8d4743075ae"
            },
            {
                "idfriend": "62994d848a13b93a50ca6f9f",
                "accepted": false
            }
        ],
        "friendsList": [],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "6299fd6798d6a5148ca7c6d4",
        "username": "Sarra Ayari",
        "email": "sarra.ayari@gmail.com",
        "password": "$2a$10$OD9KHmvwc3gE/pbYC5veguNgU3kIazJD4dyNmLn/C9PhdeGQmaa6u",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 23147896,
        "invitations": [
            {
                "idfriend": "62994d848a13b93a50ca6f9f"
            },
            {
                "idfriend": "62994d848a13b93a50ca6f9f",
                "accepted": false
            }
        ],
        "friendsList": [
            {
                "idfriend": "62994c9b02edc8d4743075ae"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b5b63f44e5bdbdb9cbfcb",
        "username": "Manar ayadi",
        "email": "manar.ay@gmail.com",
        "password": "$2a$10$jD/ZUxzW6.947rp0zJiLw.m4UjU.3HLuo1OkvSAyP5Il8gP021p0W",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 52147500,
        "invitations": [
            {
                "idfriend": "62994c9b02edc8d4743075ae",
                "accepted": false
            }
        ],
        "friendsList": [],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b5b98f44e5bdbdb9cc07f",
        "username": "Sonia Mosbahi",
        "email": "sonia.mosbahi@gmail.com",
        "password": "$2a$10$ckLbz7U9LlPZz46sclftgeONgpXhatqTtbNMlnXRFLuWDIdya0wRi",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 56214789,
        "invitations": [
            {
                "idfriend": "62994c9b02edc8d4743075ae",
                "accepted": false
            }
        ],
        "friendsList": [],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b5ea5f44e5bdbdb9ccaf7",
        "username": "Haifa Omrani",
        "email": "haifafoufa@gmail.com",
        "password": "$2a$10$ERIlLhWh7iMX.XiKFGQeTO7zJomr7lqjiuVZEvhI0/szSpzG4CD8C",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 23145200,
        "invitations": [
            {
                "idfriend": "62994c9b02edc8d4743075ae",
                "accepted": true
            }
        ],
        "friendsList": [
            {
                "idfriend": "62994c9b02edc8d4743075ae"
            },
            {
                "idfriend": "629b60fa25e67d731029687f"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b60fa25e67d731029687f",
        "username": "Ali ben Amor",
        "email": "ali.bnamor@gmail.com",
        "password": "$2a$10$pWGrs9f0fcxRy3v51U4xs.y1.wqSReM9iFkmaeI/ub1bOAZwtMK/i",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 55120321,
        "invitations": [
            {
                "idfriend": "629b5ea5f44e5bdbdb9ccaf7",
                "accepted": true
            }
        ],
        "friendsList": [
            {
                "idfriend": "629b680825e67d7310296be3"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b680825e67d7310296be3",
        "username": "Mohamed ben Slimene ",
        "email": "mohamd.slmn@gmail.com",
        "password": "$2a$10$7rW.9CNxbwLkWQJUyVZRxeJmtLv4C14pizHtFT1JfjTJ35HcEFBTq",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 23120200,
        "invitations": [
            {
                "idfriend": "629b60fa25e67d731029687f",
                "accepted": true
            },
            {
                "idfriend": "62994c9b02edc8d4743075ae",
                "accepted": false
            }
        ],
        "friendsList": [
            {
                "idfriend": "629b691bcc84710cfd9f0a40"
            }
        ],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b691bcc84710cfd9f0a40",
        "username": "Houssem ben Yahia",
        "email": "houssem.by@gmail.com",
        "password": "$2a$10$bYLdnxK4s9LqQAK9SxC3tOm8LfFGMXIq4clNH/8idESlwXex6QfVG",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 55210300,
        "invitations": [
            {
                "idfriend": "629b680825e67d7310296be3",
                "accepted": true
            }
        ],
        "friendsList": [],
        "messages": [],
        "__v": 0
    },
    {
        "_id": "629b6ca1aed340c25c51a1eb",
        "username": "Houyem ben saleh",
        "email": "houyem.sl@gmail.com",
        "password": "$2a$10$j1C4jm93XE6fCk6S7G9KTOwQ4vbDT6V8zIELOBROfGCLBwuwNTZc2",
        "actif": false,
        "img": "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
        "phone": 54227098,
        "invitations": [
            {
                "idfriend": "629b691bcc84710cfd9f0a40",
                "accepted": true
            },
            {
                "idfriend": null,
                "accepted": false
            }
        ],
        "friendsList": [],
        "messages": [],
        "__v": 0
    }]);
       const [user, setuser] = useState([]);
       const [iduser, setid] = useState();
       const [ms, setms] = useState();
       const [show, setshow] = useState(true);
       const [group, setgroup] = useState(false);
       const [groupname, setgroupname] = useState();
       const [groups, setgroups] = useState([]);
       const [messagesgroups, setmessagesgroups] = useState([]);
       
       const [usermessages, setusermessages] = useState([]);
       //get users list 
         const getusers=async()=>{
        await fetch ("/users",
    {
       method:'GET',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       }
    }
    ).then((res)=>{
         const listdata= res.json();
          setusers(listdata);
          setfilter(listdata)
    }).catch ((err)=>{
        console.log(err)
    })
    

   
  //  setusers(listdata);
   
   
         }
// get usersmessages 
     const getmessages=async()=>{
    const res=await fetch ("/messages",
    {
       method:'GET',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       }})

    const listdata=await res.json();
    setusermessages(listdata);
   
   
         }
         // get group messages
         const getgroupsmessage=async()=>{
            const response=await fetch('/groupsmsg',{
                 method:'GET',
             headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       }
            })
            const data= await response.json();
        setmessagesgroups(data)

            
         }
         // get groups 
         const getgroups=async ()=>{
             const response =await fetch('/groups ',{
                  method:'GET',
                  headers:{
                        'Content-Type':'application/json',
                        "x-xsrf-token":localStorage.getItem("TK"),

       }}
             );
             if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

             const data=await response.json();
            
             setgroups(data)
             
         }
         // send message in a group
         const addmessagetoGroup=async(e,idgroup)=>{
           e.preventDefault();
          await fetch("/addmsgroup",{
          method:'POST',
          headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       },
       body:JSON.stringify({
          iduse,idgroup,message
        }),
        
}
)
   document.getElementById('message').value="";
   
}
    // get connected user
      const getuserconnected=async()=>{
       const res=await fetch ("/user",
    {
       method:'GET',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       }});
    const user=await res.json();
    setid(user._id);
    console.log("userrrr"+iduser)
   
    
  
  }
  // send message 
  const sendmessage=async(e,id_receiver)=>{
      e.preventDefault();
      const res=await fetch('/addmessage',{
       method:'POST',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),
       },
        body:JSON.stringify({
          iduser,id_receiver,message,
        }),

          
      });
         setusermessages(await res.json());
        //   window.location.reload(true);
  }
     // // deletemessage
        const deletems=async(e,idmessage)=>{
          e.preventDefault();
        const res=await fetch (`/deletemessage/${idmessage}`,
         {
       method:'DELETE',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       }});
            const messages=await res.json();
            setusermessages(await res.json());
    }
   


    // Dispatch
       const dispatch=useDispatch();
    // search user
        const searchUser=(user)=>{
            const tab=users.filter(el=>el.username.toUpperCase().includes(user.toUpperCase()));
            setfilter(tab);
                                  }
       // /showuser
        const showUser=(idus)=>{
              const t=users.filter(element=>element._id===idus);
              setuser(t);
              setshow(true);
            const idmessage=usermessages.map((e,i)=>e.id_sender===iduse && e.id_receiver===idus? i :"").filter(String); 
            console.log(idmessage);
            for (let i = 0; i < idmessage.length; i++) {
            const id = idmessage[i];
            usermessages[id].vue = true;
      }
            //   dispatch(Viewmessage(idmessage))
    }
        // Sendmessage
      
    // send invitation
        const sendinvitation=async(idfriend)=>{
        const response=await fetch('/sentinvit',{
            method:'POST',
            headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),
       },
        body:JSON.stringify({
        iduser,idfriend
        }),   
         })
           const data=await response.json();
           setusers(data);
   alert("invitation envoyéé")
        }
    // addtolistfriends
        const addgroupname=()=>{
       setgroup(!group)
    }
    // add new group
        const addgrp= async ()=>{
            const data=await fetch ('/addgroup',{
         method:'POST',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       },
       body:JSON.stringify({
          groupname
        }),
    });
                const groups=await data.json();
                setgroups(groups);
}
        const hover=(id)=>{
           document.getElementById(id).style.visibility="visible";
    }
    // show group
        const showgroup= (idg)=>{
            const gr=groups.filter(e=>e._id===idg);
            setgrouptoshow(gr);
            console.log('ggggg'+gr)
            setshowg(true);
            setshow(false);
            console.log("show group"+show)
    }
    // join group
        const joingroup=async (idgroup)=>{
          const data=  await fetch('/joingroup',{
                method:'POST',
       headers:{
          'Content-Type':'application/json',
          "x-xsrf-token":localStorage.getItem("TK"),

       },
       body:JSON.stringify({
          iduser,idgroup
        }),
            })
         const groups=await data.json();
         setgroups(groups)
    }
    // leave group
        const Leavegrp=(idgroup,idmember)=>{
            dispatch(Leavegroup(idgroup,idmember))
            //  setshowg(false)
            alert("Done...")
    }
    

     // useEffect
  useEffect(() => {
      getusers();
      getmessages();
      getuserconnected();
      getgroups();
      getgroupsmessage();
   }, []);

    useEffect(() => {
      getmessages();      
   }, [usermessages]);

    useEffect(() => {
      getgroupsmessage();      
   }, [messagesgroups]);

   useEffect(() => {
      getgroups();
   }, [groups]);
    return (
        <div>
            <div className="row d-flex justify-content-center" >
                <Header />
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
                        {filter.filter(user=>user._id!==iduse).map(ele=>{
                            return(
                            <div className='row m-1' key={ele._id} style={{width:"200px"}}>
                                <button className="btn btn-outline-dark mt-2 "   onClick={()=>showUser(ele._id)} style={{border:"none" ,height:"45px"}}>
                                    <img src={ele.img}  alt ="" className='avatar'/><BsCircleFill className='m-1 '  style={{color:ele.actif===true?"green":"red"}} onMouseOver={()=>document.getElementById(ele.username).style.visibility="visible"} onMouseLeave={()=>document.getElementById(ele.username).style.visibility="hidden"}/>{ele.username.substr(0,11)} 
                                {/* {usermessages.filter(element=>element.id_sender==="6299fd6798d6a5148ca7c6d4").reduce(
                                    (acc, current) => (current.from===ele.id && current.to===iduse && current.vue===false  ? acc+1: acc),0)>0 ? 
                                        <p style={{fontSize:"13px",color:"green",fontWeight:"bold"}}>
                                            {ele.messages.reduce(
                                                (acc, current) => (current.from===ele.id && current.to===iduse && current.vue===false  ? acc+1: acc),0)} new messages
                                        </p>  
                                        : null
                                }        */}
                                <p style={{fontSize:"13px",color:"green",fontWeight:"bold"}}>
                                     {
                                    usermessages.filter(message=>message.id_sender===ele._id).reduce((acc,current)=> current?acc=current+1:acc,0)
                                } newmessages
                                </p>
                               
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
                            <div className="card col-md-4 mt-4  offset-md-4 bg-light" key={element._id} style={{}} >
                                <div className="card-header justify-content-center d-flex" > <img  alt ="" src={element.img} className='avatar'/><h5 style={{marginLeft:"10px"}}>{element.username}</h5>
                                </div>
                                <div className="card-body text-center">{element.email}
                                    {element.friendsList.find(e=>e.idfriend===iduser)? <h6> Friend <TiTick/></h6>: 
                                        element.invitations.find(e=>e.idfriend===iduse && e.accepted===false)?
                                    <label className='form-label'>Invitation sent</label>:
                                    <input type="button" className="btn btn-outline-dark  fw-bold"   onClick={()=>sendinvitation(element._id)}  value=" Add to Friends List"style={{width:"150px",fontSize:"13px" ,marginTop:"10px"}}/>                   
                     }
                                </div>  
                            </div>
                             
                     {/* show messages */}
                            <div className='col' style={{marginTop:"20px",marginBottom:"55px",marginLeft:"40px"}}>
                           {
                               usermessages.map(el=>{
                                   return(
                                       el.id_receiver===element._id && el.id_sender===iduser?
                                       <div className='d-flex'>
                                            <div className='row m-3 shadow '  onMouseOver={()=>document.getElementById(el._id).style.visibility="visible"  } onMouseLeave={()=>document.getElementById(el.msg).style.visibility="hidden" } style={{ borderRadius:"10px",backgroundColor:"#CCCCCC",width:"350px",height:"50px"}}>
                                                <div className="col"> 
                                                    <h5 className='mt-2'>{el.message} </h5>
                                                </div>
                                                <div className=" col-md-3 d-flex" id={el._id} style={{ visibility:"hidden",marginTop:"10px"}}>
                                                  <AiFillDelete  className="m-2" onClick={(e)=>deletems(e,el._id)}  style={{width:"100px"}}/>
                                                </div>
                                            </div>
                                            <div className="row mt-3"><p className='p-2'>  
                                            {el.vue? <TiTickOutline style={{fontSize:"20px"}} />:<TiTick style={{fontSize:"20px"}}/> }</p></div>   
                                            </div>
                                            : el.id_sender===element._id && el.id_receiver===iduse?
                                            <div className='row' style={{ marginLeft:"300px", marginTop:"20px",width:"450px",height:"50px",borderRadius:"10px"}} >
                                                <div className="col-md-3"> 
                                                    {users.filter(e=>e._id===el.id_sender).map(el=>{
                                               return(
                                                   <h6 className='mt-3'>{el.username.split(" ")[1]}</h6>
                                                            )
                                                    })
                                                    }
                                                </div>
                                                <div className="col  shadow bg-light" style={{ borderRadius:"10px"}}> <h5 className='mt-2'>{el.message}</h5></div> 
                                                </div>
                                                :null
                                                        )
                                                    })
                                                }
                                            </div>
                                         {/* send message to friend */}
                                    <form  onSubmit={(e)=>sendmessage(e,element._id)}>
                                            <div className='  d-flex' style={{width:"720px",position:"absolute",bottom:"5px",left:"20px",marginLeft:"80px" }}>
                                                {/* <InputEmoji
                                                    name="message"
                                                    onChange={setms}
                                                    cleanOnEnter
                                                    placeholder="Type a message"
                                                    /> */}
                                                 <input   id="form" type="text" class="form-control" value={message}  onChange={e=>setmessage(e.target.value)} name="msg"/>
                                                 <button   class="btn btn-primary" value="SEND" style={{marginLeft:"10px"}}>Send</button>
                                            </div>
                                    </form>
                                   
                        </>))
                             }
                        </div>
                    :showg===true  && show===false?
                    // group card description part 3
                    <div className='groupDiscuss'>
                        {grouptoshow[0].members.find(e=>e.iduser===iduse)?
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
                                                            {users.filter(element=>
                                                                element._id===member.iduser).map(user=>{
                                                                    return(
                                                                        <div className='col-md-3' >
                                                                            <div><img  alt ="" src={user.img} className="avatar"  onMouseOver={()=>document.getElementById(user._id).style.visibility="visible"} onMouseLeave={()=>document.getElementById(user._id).style.visibility="hidden"} /></div> 
                                                                            <div id={user._id} style={{visibility:"hidden"}}>< p style={{fontSize:"10px",fontWeight:"500"}}>{user.username}</p></div>
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
                                                    messagesgroups.filter(group=>group.id_group===el._id ).map(el=>{
                                                        return(       
                                                        <div className='d-flex'>
                                                            <div className="col mb-4"> 
                                                            
                                                                <>
                                                                {users.filter(user=>user._id===el.id_sender).map(element=>{
                                                                    return(     
                                                                <div className="row mb-4"> 
                                                                    <div className="col-md-2">
                                                                    </div>
                                                                      { 
                                                                    element._id===iduse?
                                                                        <div className="col-md-4">  <h6>Vous</h6>
                                                                        </div>
                        :
                                                                <div className="col-md-4">  <h6>{element.username}</h6>
                                                                </div>
                                                                }
                                                                <div className="row" > 
                                                                     <div className='col-md-2' ><img  alt ="" src={element.img} className='avatar2'/>
                                                                     </div> 
                                                                     <div className="col-md-8 p-2 shadow" style={{ borderRadius:"10px",backgroundColor:"#CCCCCC",height:"50px"}}> <h5>{el.message}</h5></div>
                                                                     </div>
                                                                </div>
                                                                        )
                                                                    } 
                                                                    )
                                                                }
                                                                </>
                                                                    
                                                                
                                                                </div>
                                                        </div>      
                                                                )
                                                            })
                                                        }
                                            </div>
                                            {/* send message to group */}
                                               <form  onSubmit={(e)=>addmessagetoGroup(e,el._id)}>
                                            <div className='  d-flex' style={{width:"720px",position:"absolute",bottom:"5px",left:"20px",marginLeft:"80px" }}>
                                                {/* <InputEmoji
                                                    name="message"
                                                    onChange={setms}
                                                    cleanOnEnter
                                                    placeholder="Type a message"
                                                    /> */}
                                                 <input   id="messsage" type="text" class="form-control" value={message}  onChange={e=>setmessage(e.target.value)} name="msg"/>
                                                 <button   class="btn btn-primary" value="SEND" style={{marginLeft:"10px"}}>Send</button>
                                            </div>
                                    </form>
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
                groups.map(e=>{
                    return(
                    <>
                        <div className="d-flex m-2" >
                             <button onClick={()=>showgroup(e._id)} onMouseOver={()=>hover(e.name)} onMouseLeave={()=>  document.getElementById(e.name).style.visibility="hidden"} className="  btn btn-dark  text-center avatar  border-2"  style={{width:"50px" ,height:"50px",borderRadius:"50%"}}><i className={`fa-solid fa-${e.name.toLowerCase().slice(0,1)} ` } style={{fontSize:"25px"}}></i></button>
                             <div className="col shadow  p-2 bg-black" id={e.name}  style={{ width:"60px",height:"40px",visibility:"hidden",borderRadius:"10px"}}>
                             <h6 className='text-white'>{e.name.slice(0,7)}</h6>   
                            </div>
                                {e.members.find(e=>e.iduser===iduse)?
                                <input type="button" className='btn btn-dark text-white mt-1'  value="Leave" onClick={()=>Leavegrp(e.id,iduse)}style={{width:"60px",height:"40px",fontSize:"15px",marginLeft:"15px",visibility:"visible",position:""}  }/>
                                : <input type="button" className='btn btn-dark text-white mt-1'  value="Join" id={e._id} onClick={()=>joingroup(e._id)}style={{width:"60px",height:"40px",fontSize:"15px",marginLeft:"17px",visibility:"visible",position:""}  }/>
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
                            <input className='' type="text" onChange={e=>setgroupname(e.target.value)}  value={groupname} id="groupname" style={{width:"70%",border:"2px solid black"}}  placeholder="add a group name " />
                            <button   className='btn btn-outline-dark' onClick={addgrp} style={{marginLeft:"10px",border:"2px solid black"}}>Add</button>
                        </div>
                            )
                            :null}
            </div>
        
            </div>
        </div>
    );
}

export default Listusers;
