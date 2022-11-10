import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{float:'right', margin:'2vw'}} onClick={() => loginWithRedirect()}>Log In <FontAwesomeIcon className="mx-2" icon={faRightFromBracket} size='lg'/></button>;
};

export default LoginButton;