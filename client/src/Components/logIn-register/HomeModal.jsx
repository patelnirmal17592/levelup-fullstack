import React, { useState } from "react";
import LoginRegister from "./LoginRegister";

function HomeModal() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <>
      <div className="login-register">
        <div className="bi bi-person-circle nav-footer-icons">
          <span
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            {" "}
            Register | Login
          </span>
        </div>
        {openLoginModal && <LoginRegister closeModal={setOpenLoginModal} />}
      </div>
    </>
  );
}

export default HomeModal;
