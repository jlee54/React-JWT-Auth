import Authorization from './Authorization'
import ErrorHandler from './ErrorHandler'

const AUTH_URL = "http://localhost:8083";

function getContentType()
{
	return "application/json"
}

function getHeaders()
{
	const token = Authorization.getJWT()
	const text = "Authorization: Bearer " + token

	return {
		text
	}
}

function handleError(message) {
	ErrorHandler.setErrorMessage(message);
}

function handleResponse(response)
{
	if (!response.ok) {
  	ErrorHandler.setErrorMessage(response.status);
  } else if (!response.success) {
    ErrorHandler.setErrorMessage(response.error);
  } else {
  	ErrorHandler.setErrorMessage("Success");
  }
}

export { AUTH_URL, getContentType, getHeaders, handleResponse, handleError}