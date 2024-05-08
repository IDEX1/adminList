import React from 'react';
import SignupComponent from './Components/Signup/SignupComponent';
import UserInformation from './Components/user_info/userInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login/Logincomponent';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/UserInformation" element={<UserInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
