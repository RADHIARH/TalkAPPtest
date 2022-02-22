import './App.css';
import Login from './components/Login';
import { Switch,Route } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import UserProfile from './components/UserProfile';
import EditPicture from './components/EditPicture';
import Privateroute from './components/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {  
   const state = useSelector((state) => state.reducer);

  return (
    <div className="container">
      <Switch>
        {/*  */}
        <Privateroute
          path="/listusers/:idd"
          component={ListUsers}
          auth={state.isAuthenticated}
        />
        <Route exact path="/" component={Login} />
        <Privateroute
          exact
          path="/profile/:idu"
          component={UserProfile}
          auth={state.isAuthenticated}
        />
        <Privateroute
          exact
          path="/editpic"
          auth={state.isAuthenticated}
          component={EditPicture}
        />
      </Switch>
    </div>
  );
}

export default App;
