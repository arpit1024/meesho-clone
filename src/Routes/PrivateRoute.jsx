import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let num = JSON.parse(localStorage.getItem("meesho-user-number"));
  if (!num) {
    return <Navigate to="/signup" />;
  }

  return <>{children}</>;
};
