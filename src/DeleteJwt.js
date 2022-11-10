
import { useState, useEffect } from 'react';
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"

import Authorization from './Authorization'

function DeleteJwt() {

  async function handleDeleteJWT(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/api/token', {
        method: "DELETE",
        contentType: getContentType(),
        headers: getHeaders(),
        body: JSON.stringify({userId: Authorization.getUserId()})
      });

      handleResponse(response);
      data = await response.json();
    } catch (error) {
      handleError(error);
    }    
  }

  return (
    <button onClick={handleDeleteJWT}>Delete JWT</button>
  );
}

export default DeleteJwt;
