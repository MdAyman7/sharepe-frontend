import { useEffect } from "react";

import { checkSession } from "../utils/apis";

const Layout = ({ children }) => {
  const fetchCheckSession = async () => {
    try {
      const respo = await checkSession();
      console.log(respo, "respo");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCheckSession();
  }, []);

  return <>{children}</>;
};

export default Layout;
