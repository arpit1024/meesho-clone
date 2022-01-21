import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/header-footer'/Navbar";
import { Signup } from "./components/LogInLogOuts/signup";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
