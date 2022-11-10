import * as jose from 'jose'

const LOCAL_STORAGE_JWT_KEY = "Authorization.jwt"
const LOCAL_STORAGE_USERNAME = "Authorization.username"
const LOCAL_STORAGE_USER_ID = "Authorization.userId"

const PUBLIC_KEY = "keepissecretkeepitsafe"

class Authorization
{
	static getJWT()
	{
		return localStorage.getItem(LOCAL_STORAGE_JWT_KEY)
	}

	static setJWT(jwt)
	{
		// const { payload, protectedHeader } = jose.jwtVerify(jwt, PUBLIC_KEY)

    localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwt)
	}

	static removeJWT()
	{
    localStorage.removeItem(LOCAL_STORAGE_JWT_KEY)
	}

	static getUsername()
	{
		return localStorage.getItem(LOCAL_STORAGE_USERNAME)
	}

	static setUsername(username)
	{
		localStorage.setItem(LOCAL_STORAGE_USERNAME, username)
	}

	static getUserId()
	{
		return localStorage.getItem(LOCAL_STORAGE_USER_ID)
	}
	
	static setUserId(user_id)
	{
		localStorage.setItem(LOCAL_STORAGE_USER_ID, user_id)
	}
}

export default Authorization;
