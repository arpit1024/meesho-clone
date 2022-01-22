import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./components/LogInLogOuts/signup";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { CartRoutes } from "./Routes/CartRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <CartRoutes />
    </>
  );
}

export default App;
