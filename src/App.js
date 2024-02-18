import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegistrationForm from './pages/RegisterUser';
import LoggedInHome from './pages/LoggedInHome';
import Login from './pages/Login';
import AllStudents from './pages/AllStudents';
import { UserProvider } from './pages/UserContext';





function App() {
  return (
    <UserProvider>
    <div className='App my-component my-dom-height'>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/registerUser" element={<RegistrationForm/>}></Route>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/welcomeHome" element={<LoggedInHome/>}></Route>
        <Route exact path="/allStudents" element={<AllStudents/>}></Route>
      </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}


export default App;

