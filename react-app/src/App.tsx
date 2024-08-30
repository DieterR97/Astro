import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Admin from "./Pages/Admin_Portal/Admin";
import Authentication from "./Pages/Authentication/Authentication";
import CreateAccount from "./Pages/createAccount/createAccount";
import Login from "./Pages/login/login";
import Overview from "./Pages/Overview/Overview";
import Purchasing from "./Pages/Purchasing_Currency/Purchasing";
import Transactions from "./Pages/Transactions/Transactions";
import Withdrawals from "./Pages/Withdrawals/Withdrawals";
import Navbar from "./Components/Navbar/Navbar";
import AdminTransactionView from "./Pages/AdminTransactionView/AdminTransactionView";

function App() {
  return (
    <Router>
      <NavRoutes />
    </Router>
  );
}

function NavRoutes() {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/authentication", "/"];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  const contentStyle = showNavbar
    ? { flex: 1, marginLeft: "264px" }
    : {
      height: "100vh",
      width: "100vw",
    };

  return (
    <>
      {showNavbar && <Navbar />}
      <div style={contentStyle}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/" element={<CreateAccount />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions" element={<AdminTransactionView />} /> 
          <Route path="/withdrawals" element={<Withdrawals />} />
          {/* <Route path="/transactions/:user_id" element={<Transactions />} /> */}
          <Route path="/transactions/:user_id" element={<AdminTransactionView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
