
import { useState, useEffect } from 'react';
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"
import Authorization from './Authorization'
import './Login.css'

function Login({setIsLoggedIn}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [jwt, setJWT] = useState(null)
  const [userId, setUserId] = useState(null)

  function handleUsername(event)
  {
    setUsername(prev => event.target.value)
  }

  function handlePassword(event)
  {
    setPassword(prev => event.target.value)
  }

  async function handleSubmit(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/api/auth/login', {
        method: "POST",
        contentType: getContentType(),
        headers: getHeaders(),
        body: JSON.stringify({username: username, password: password})
      });

      handleResponse(response);
      data = await response.json();
    } catch (error) {
      handleError(error);
    }

    data = {
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjo1NX0.b82nmRE_vmX0EBLbLtdxRC4Z0OLd167IV6z-DPEKqfw",
      userId: 5
    }
    const jwt = data.jwt
    const user_id = data.userId
    setJWT(prev => jwt)
    setUserId(prev => user_id)
  }

  useEffect(() => {
    if (jwt) {
      Authorization.setJWT(jwt)
      Authorization.setUsername(username)
      Authorization.setUserId(userId)
      setIsLoggedIn(true)
    }
  }, [jwt])

  useEffect(() => {
    const cachedJWT = Authorization.getJWT(jwt)
    if (cachedJWT) {
      setJWT(cachedJWT)
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="form-wrapper">
      <form className="form-structor" onSubmit={handleSubmit}>
        <div className="login">
          <div className="center">
            <h2 className="form-title" id="login">Log in</h2>
            <div className="form-holder">
              <input type="text" className="input" value={username} onChange={handleUsername} placeholder="username" required/>
              <input type="password"  className="input"value={password} onChange={handlePassword} placeholder="password" required/>
            </div>
            <button className="submit-btn">Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
