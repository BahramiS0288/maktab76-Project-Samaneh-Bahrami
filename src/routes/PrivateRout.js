import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.users);
  return isLoggedIn ? <>{children}</> : <Navigate to={"/login"} />;
}

export default PrivateRoute;