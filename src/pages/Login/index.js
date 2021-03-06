import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import "./login.css";
import paylivreLogoBlue from "./../../assets/logo_paylivre_blue.svg";
import { HOST_WEB } from "../../constants/web_host";

function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <div className="container-login">
        <div className="container-form-login">
          <img
            alt="logo paylivre"
            className="logo-paylivre-login"
            src={paylivreLogoBlue}
          />
          <p className="text-about-login">Documentação de projetos Paylivre.</p>
          <button className="login-button" onClick={() => loginGoogle()}>
            Logar com Google
          </button>
        </div>
      </div>
    );
  } else {
    return <Navigate to={`/${HOST_WEB}/home`} />;
  }
}

export default Login;
