import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Admin from './Pages/Admin_Portal/Admin';
import Authentication from './Pages/Authentication/Authentication';
import CreateAccount from './Pages/createAccount/createAccount';
import Login from './Pages/login/login';
import Overview from './Pages/Overview/Overview';
import Purchasing from './Pages/Purchasing_Currency/Purchasing';
import Transactions from './Pages/Transactions/Transactions';
import Withdrawals from './Pages/Withdrawals/Withdrawals';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <NavRoutes />
      </div>
    </Router>
  );
}

function NavRoutes() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {/* {showNavbar && <Navbar />} */}
      <div style={{ flex: 1, marginLeft: '264px' }}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Authentication" element={<Authentication />}></Route>
          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/purchasing" element={<Purchasing />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/withdrawals" element={<Withdrawals />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
