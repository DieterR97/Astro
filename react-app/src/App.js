import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css';
import LoginPage from "./Pages/login/login.jsx";
import SignUp from "./Pages/createAccount/createAccount.jsx";
import Authentication from "./Pages/Authentication/authentication.jsx";
import Overview from "./Pages/overview/overview.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Authentication" element={<Authentication />}></Route>
        <Route path="/Overview" element={<Overview />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
