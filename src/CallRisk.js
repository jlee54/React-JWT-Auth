
import { AUTH_URL, getContentType, getHeaders, handleResponse, handleError} from "./FetchUtility"

function CallRisk() {

  async function handlePostAch(event)
  {
    event.preventDefault()

    let response = {}
    let data = {}
    try {
      response = await fetch(AUTH_URL + '/api/test/risk', {
        method: "POST",
        contentType: getContentType(),
        headers: getHeaders(),
        body: JSON.stringify({})
      });
      handleResponse(response);

      let data = await response.json();
      handleResponse(response);
      data = await response.json();
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <button onClick={handlePostAch}>Call Risk</button>
  );
}

export default CallRisk;
