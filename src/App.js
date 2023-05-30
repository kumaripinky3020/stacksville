import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './Components/SignIn';
import ForgotPassword from './Components/ForgotPassword';
import Header from './Header/Header';
import Dashboard from './Blocks/Dashboard';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import LoginHistory from './LoginHistory/LoginHistory';
import MiddleContainer from './MiddleContainer/MiddleContainer'
import Style from "./Style/Style.css"
import Setting from "./Settings/Setting"
import OtpCheck from './Blocks/OtpCheck';
import MobileLogin from './Blocks/MobileLogin';
function App() {

  const [tokenValidation, setTokenValidation] = useState('')

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setTokenValidation(token);
  }, []);

  return (
    <div>
      {!tokenValidation ?
        <Router>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot/password" element={<ForgotPassword />} />
            <Route exact path="/mobile/login" element={<MobileLogin />} />
            <Route exact path="/linodes/otp" element={<OtpCheck />} />
          </Routes>
        </Router>
        :
        <div>
          <Sidebar />
          <MiddleContainer />
          <Header />
          <Router>
            <Routes>
              <Route exact path="/linodes/dashboard" element={<Dashboard />} />
              <Route exact path="/linodes/home" element={<LoginHistory />} />
              <Route exact path="/linodes/setting" element={<Setting />} />
            </Routes>
          </Router>
        </div>
      }
    </div>
  );
}

export default App;
