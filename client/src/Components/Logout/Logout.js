import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../Helpers/useToken";

function Logout() {
  const { unsetToken } = useToken();
  let navigate = useNavigate();

  unsetToken(null);
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <div>Thank you for visitting! See you again soon </div>;
}

export default Logout;
