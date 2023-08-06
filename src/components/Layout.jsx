import { useEffect } from "react";

import { checkSession } from "../utils/apis";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const fetchCheckSession = async () => {
    try {
      const { success, msg } = await checkSession();
      console.log(success, msg, "data");
      if (!success) {
        if (pathname === "/signup") {
          //njkfwe
        } else if (pathname !== "/login") {
          navigate("/login");
        }
      } else {
        if (pathname === "/login" || pathname === "/signup") {
          navigate("/home");
        }
      }
    } catch (err) {
      console.log(err, "Errorrrrr");
    }
  };

  useEffect(() => {
    fetchCheckSession();
  }, []);

  return <>{children}</>;
};

export default Layout;
