import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./components/LogInLogOuts/signup";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { CartRoutes } from "./Routes/CartRoutes";
import { Final } from "./Pages/Products/final";
import { PageUi } from "./Pages/pageUi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Final />}></Route>
        <Route path="/details/:id" element={<PageUi />}></Route>
      </Routes>
      <CartRoutes />
    </>
  );
}

export default App;
