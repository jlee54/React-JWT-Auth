
import { useState, useEffect } from 'react';
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"

import { Link } from "react-router-dom"
import Authorization from './Authorization'

function Logout({setIsLoggedIn}) {

  async function handleLogout(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/api/auth/logout', {
        method: "POST",
        contentType: getContentType(),
        headers: getHeaders(),
        body: JSON.stringify({userId: Authorization.getUserId()})
      });

      handleResponse(response);
      data = await response.json();
    } catch (error) {
      handleError(error);
    }
    
    Authorization.removeJWT()
    setIsLoggedIn(false)
  }

  return (
    <Link onClick={handleLogout}>Logout</Link>
  );
}

export default Logout;
