import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./components/LogInLogOuts/signup";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { CartRoutes } from "./Routes/CartRoutes";
import { Final } from "./Pages/Products/final";
import { PageUi } from "./Pages/pageUi";
import "bootstrap/dist/css/bootstrap.css";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Final />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/details/:id"
          element={
            <PrivateRoute>
              <PageUi />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <CartRoutes />
    </>
  );
}

export default App;
