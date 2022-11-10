
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"

function PostCc() {

  async function handlePostAch(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/api/test/cc', {
        method: "POST",
        contentType: getContentType(),
        headers: getHeaders(),
        body: JSON.stringify({})
      });
      handleResponse(response);

      handleResponse(response);
      data = await response.json();
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <button onClick={handlePostAch}>Post CC</button>
  );
}

export default PostCc;
