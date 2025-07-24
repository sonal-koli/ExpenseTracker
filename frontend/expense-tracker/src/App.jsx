//Loads React (needed for JSX)
import React from 'react'
// Import required components from the react-router-dom library
import{
  BrowserRouter as Router,// Main router wrapper for browser-based routing
  Routes,// Used to define all available routes
  Route,// Used to define a single route path and its component
  Navigate,// Used to redirect from one route to another
}from "react-router-dom";

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';

//Creates a functional component
const App = () => {
  //JSX output of the component
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />  {/* shows Root component at / */}
          <Route path='/login' exact element={<Login />} /> {/* Route to login */}
          <Route path='/signUp' exact element={<SignUp />} /> {/* Route to signup */}
          <Route path='/dashboard' exact element={<Home />} /> {/* Route to dashboard  */}
          <Route path='/income' exact element={<Income />} /> {/* Route to income */}
          <Route path='/expense' exact element={<Expense />} /> {/* Route to income */}
        </Routes>
      </Router>
    </div>
  )
}
//makes the component usable everywhere
export default App

const Root = () =>{
  //Check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");
  // `!!` converts the value into a boolean
  // If token exists → true (authenticated)
  // If not → false (not authenticated)

  // Redirect to dashboard if authenticated , otherwise to login(Conditional redirect)
  return isAuthenticated?(
    <Navigate to="/dashboard"/>
  ):(
    <Navigate to="/login"/>
  );
};