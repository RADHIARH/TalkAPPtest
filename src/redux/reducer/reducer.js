const states = {
  isAuthenticated: false,
  users: [
    {
      id: 1,
      username: "Radhia Rahmani",
      email: "radhiarahmani.info@gmail.com",
      password: "RADHIARAHMANI2021",
      actif: "false",
      img: "https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg",
      phone: 54227098,
      invitations: [],
    },
    {
      id: 2,
      username: "Amna Arfaoui",
      email: "emna.arfaoui@gmail.com",
      password: "EMNAARFAOUI1999",
      actif: "false",
      img: "https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200",
      invitations: [],
    },
    {
      id: 3,
      username: "Sihem benAli",
      email: "sihem96@gmail.com",
      password: "SIHEMSIHEM1996",
      actif: "false",
      img: "https://st.depositphotos.com/1015583/2130/i/600/depositphotos_21307971-stock-photo-shining-girl.jpg",
      invitations: [],
    },
    {
      id: 4,
      username: "Ahmed Suissi",
      email: "ahmedahmed14@gmail.com",
      password: "AHMED123456",
      actif: "false",
      img: "https://img.freepik.com/photos-gratuite/homme-affaires-prospere-garde-mains-croisees-expression-satisfaite_273609-16711.jpg?size=626&ext=jpg",
      invitations: [],
    },
    {
      id: 5,
      username: "NAHED BEN Fraj",
      email: "nahednahouda@gmail.com",
      password: "NAHDEDabcd1234",
      actif: "false",
      img: "https://st.depositphotos.com/1024381/2170/i/600/depositphotos_21708633-stock-photo-teen-girl-beautiful-cheerful-enjoying.jpg",
      invitations: [],
    },
    {
      id: 6,
      username: "Ismail Fourati",
      email: "ismail123654@gmail.com",
      password: "ISMAILISMAIL1998",
      actif: "false",
      img: "https://st.depositphotos.com/1003728/3540/i/600/depositphotos_35408681-stock-photo-an-image-of-a-handsome.jpg",
      invitations: [],
    },
    {
      id: 7,
      username: "Mouhamed Ayadi",
      email: "mohamedayadi97@gmail.com",
      password: "MAMOHAMED02041994",
      actif: "false",
      img: "https://img.freepik.com/photos-gratuite/beau-jeune-homme-t-shirt-blanc-poitrine-bras-croises-souriant-heureux_176420-21607.jpg?size=626&ext=jpg",
      invitations: [],
    },

    {
      id: 8,
      username: "Nidhal Wertani",
      email: "nidhalwer@gmail.com",
      password: "NIDHAL123456",
      actif: "false",
      img: "https://thumbs.dreamstime.com/b/gar%C3%A7on-gai-de-16-ans-11664521.jpg",
      invitations: [],
    },
    {
      id: 9,
      username: "Aya Ben Slimane",
      email: "eyaayouta@gmail.com",
      password: "EYA123456",
      actif: "false",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpd7AAZRf5rxObrQAIw-wSGeK4j-O3QyXhw&usqp=CAU",
      invitations: [],
    },
    {
      id: 10,
      username: "Ichrak Rahmouni",
      email: "ichrakichrak99@gmail.com",
      password: "ICHRAKRAHMOUNI99",
      actif: "false",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99r8zSsCjWBO9dtgLplNCbuZph5qWIT8wNQ&usqp=CAU",
      invitations: [],
    },
  ],
  messages: [],
  login: [],
  FriendsList: [],
  groups: [
    {
      id: 1,
      name: "java",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJC3Ge0OBuPXcXuC3V5V0S0n8Yh0IkHy9dpQ&usqp=CAU",
      members: [],
      messages: [
        {
          member: 1,
          message: "bonjour les amis ",
        },
      ],
    },
  ],
};

const reducer = (state = states, action) => {
  switch (action.type) {
    case "authenticated":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
      };

    case "signIn":
      const username = action.username;
      const email = action.email;
      const userpassword = action.password;
      const phone = action.phone;
      const image = action.image;
      const maxid = state.users.reduce(
        (acc, current) => (current.id > acc ? current.id : acc),
        0
      );
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: maxid + 1,
            username: username,
            email: email,
            password: userpassword,
            phone: phone,
            img: image,
            invitations: [],
          },
        ],
      };
    case "addmsg":
      const message = action.data;
      const rec = action.to;
      const send = action.from;
      const max = state.messages.reduce(
        (acc, current) => (current.id > acc ? current.id : acc),
        0
      );
      // const user = state.users.findIndex((e) => e.id === rec);
      // const newusers=[...state.users];
      // newusers[user].msnotread.push(send);
      return {
        ...state,

        messages: [
          ...state.messages,
          {
            id: max + 1,
            msg: message,
            from: send,
            to: rec,
            vue: false,
          },
        ],
      };

    case "addfriend":
      const idfriend = action.idf;
      const iduser = action.payload;

      return {
        ...state,

        FriendsList: [
          ...state.FriendsList,
          {
            friend1: iduser,
            friend2: idfriend,
          },
        ],
      };

    case "sendinvitation":
      const idsender = action.payload;
      const idreceiver = action.receiver;
      const useridd = state.users.findIndex(
        (element) => element.id === idreceiver
      );
      const newusers = [...state.users];
      newusers[useridd].invitations.push({ idf: idsender, accepted: false });
      return {
        ...state,
        users: newusers,
      };

    case "acceptinvitation":
      const idsender1 = action.payload;
      const idreceiver1 = action.receiver;
      const useri = state.users.findIndex(
        (element) => element.id === idreceiver1
      );
      const newusers2 = [...state.users];
      const invit = newusers2[useri].invitations.findIndex(
        (e) => e.idf === idsender1 && e.accepted === false
      );
      newusers2[useri].invitations[invit].accepted = true;
      // const friend2=state.users.findIndex(e=>e.id===idsender)
      // newusers2[friend2].invitations.put({idf:idreceiver,accepted:true})

      return {
        ...state,
        users: newusers2,
      };

    case "removefriend":
      const idf = action.idf;
      const idu = action.payload;

      return {
        ...state,
        FriendsList: state.FriendsList.filter(
          (e) => e.friend1 !== idu || e.friend2 !== idf
        ),
      };
    case "login":
      const login1 = action.val1;
      const login2 = action.val;
      return {
        ...state,
        login: [
          ...state.login,
          {
            username: login1,
            password: login2,
          },
        ],
      };
    case "online":
      const e = action.eml;
      const p = action.passw;
      const i = state.users.findIndex(
        (user) => user.email === e && user.password === p
      );
      const newarray4 = [...state.users];
      newarray4[i].actif = true;

      return {
        ...state,
        users: newarray4,
      };
    case "offline":
      const e1 = action.eml1;
      const p1 = action.passw1;
      const index = state.users.findIndex(
        (user) => user.email === e1 && user.password === p1
      );
      const newarray5 = [...state.users];
      newarray5[index].actif = false;

      return {
        ...state,
        users: newarray5,
      };
    case "editinf":
      const data1 = action.data1;
      const data2 = action.data2;
      const data3 = action.data3;
      const data4 = action.data4;
      const ind = state.users.findIndex((user) => user.id === data1);
      const newarray1 = [...state.users];
      newarray1[ind].username = data2;
      newarray1[ind].email = data3;
      newarray1[ind].phone = data4;
      return {
        ...state,
        users: newarray1,
      };
    case "editpass":
      const data5 = action.data5;
      const password = action.pass;
      const indx = state.users.findIndex((user) => user.id === data5);
      const newarray2 = [...state.users];
      newarray2[indx].password = password;

      return {
        ...state,
        users: newarray2,
      };
    case "editim":
      const newavatar = action.image;
      const userid = action.userid;
      const id = state.users.findIndex((user) => user.id === userid);
      const newarray3 = [...state.users];
      newarray3[id].img = newavatar;

      return {
        ...state,
        users: newarray3,
      };
    case "addg":
      const name = action.name;
      const maxidd = state.groups.reduce(
        (acc, current) => (current.id > acc ? current.id : acc),
        0
      );
      return {
        ...state,
        groups: [
          ...state.groups,
          {
            id: maxidd + 1,
            name: name,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJC3Ge0OBuPXcXuC3V5V0S0n8Yh0IkHy9dpQ&usqp=CAU",
            members: [],
            messages: [],
          },
        ],
      };
    case "deletems":
      const idmessage = action.idmsg;
      return {
        ...state,
        messages: state.messages.filter((element) => element.id !== idmessage),
      };
    case "editms":
      const idmsg = action.payload;
      const newmsg = action.msg;
      const indexmsg = state.findindex((element) => element.id === idmsg);
      const newmessage = [...state.messages];
      newmessage[indexmsg].msg = newmsg;
      return {
        ...state,
        messages: newmessage,
      };

    case "addmember":
      const idmember = action.iduser;
      const idgroup = action.idgroup;
      const idgrp = state.groups.findIndex((e) => e.id === idgroup);
      const group = [...state.groups];
      group[idgrp].members.push(idmember);

      return {
        ...state,

        groups: group,
      };

    case "sendtogroup":
      const groupid = action.payload;
      const member = action.idmember;
      const messageMember = action.msg;
      const idgroupe = state.groups.findIndex((e) => e.id === groupid);
      const newtab = [...state.groups];
      newtab[idgroupe].messages.push({
        member: member,
        message: messageMember,
      });
      return {
        ...state,
        groups: newtab,
      };
    case "leavegroup":
      const idg = action.payload;
      const idm = action.idmem;
      const idgp = state.groups.findIndex((e) => e.id === idg);
      const grp = [...state.groups];
      const indexmemeber = grp[idgp].members.findIndex((id) => id === idm);
      grp[idgp].members.splice(indexmemeber, 1);

      return {
        ...state,
        groups: grp,
      };
    case "viewmessage":
      const newmessages = [...state.messages];
      const idmessages = action.payload;
      for (let i = 0; i < idmessages.length; i++) {
        const idd = idmessages[i];
        newmessages[idd].vue = true;
      }
      return {
        ...state,
        messages: newmessages,
      };
    default:
      return state;
  }
};
export default reducer;
