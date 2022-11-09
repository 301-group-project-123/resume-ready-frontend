import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button style={{float:'right', margin:'2vw'}} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
      <FontAwesomeIcon className="mx-2" icon={faRightToBracket} size='lg'/>
    </button>
  );
};

export default LogoutButton;