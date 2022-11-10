
import { useState, useEffect } from 'react';
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"
import Authorization from './Authorization'

function CreateJwt() {

  const [jwt, setJWT] = useState(null)

  async function handleCreateJWT(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/token', {
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

    data = {
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjo1NX0.b82nmRE_vmX0EBLbLtdxRC4Z0OLd167IV6z-DPEKqfw",
    }
    const jwt = data.jwt
    setJWT(prev => jwt)
  }

  useEffect(() => {
    if (jwt) {
      Authorization.setJWT(jwt)
    }
  }, [jwt])

  return (
    <button onClick={handleCreateJWT}>Create JWT</button>
  );
}

export default CreateJwt;
