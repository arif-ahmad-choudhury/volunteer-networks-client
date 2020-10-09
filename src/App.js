import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import Events from "./components/Events/Events";
import AddEvents from "./components/AddEvents/AddEvents";
import DeleteConfirmed from "./components/DeleteConfirmed/DeleteConfirmed";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>         
        <Switch>
          <Route path="/home">
            <Home />
          </Route>         
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/addEvents">
            <AddEvents/>
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>           
          <PrivateRoute path="/events">
            <Events />
          </PrivateRoute>  
          <Route path="/deleteConfirmed">
            <DeleteConfirmed />
          </Route>                
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>      
      </Router>
    </UserContext.Provider>
  );
}

export default App;
