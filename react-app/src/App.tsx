import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Pages/Admin_Portal/Admin';
import Authentication from './Pages/Authentication/Authentication';
import Account from './Pages/Account_Overview/Account';
import Purchasing from './Pages/Purchasing_Currency/Purchasing';
import Transactions from './Pages/Transactions/Transactions';
import Withdrawals from './Pages/Withdrawals/Withdrawals';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Authentication />}></Route> */}
        <Route path="/" element={<Admin />}></Route>
        {/* <Route path="/Account" element={<Account />}></Route> */}
        {/* <Route path="/Purchasing" element={<Purchasing />}></Route> */}
        <Route path="/Transactions" element={<Transactions />}></Route>
        {/* <Route path="/Withdrawals" element={<Withdrawals />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
