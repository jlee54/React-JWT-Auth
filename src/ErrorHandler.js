const LOCAL_STORAGE_ERROR = "ErrorHandler.error"

class ErrorHandler
{
	static setErrorMessage(message)
	{
		localStorage.setItem(LOCAL_STORAGE_ERROR, message)

    let timer;
    timer = setTimeout(()=> {
      localStorage.removeItem(LOCAL_STORAGE_ERROR)
      timer && clearTimeout(timer)
    }, 5000)
	}

	static getErrorMessage()
	{
		return localStorage.getItem(LOCAL_STORAGE_ERROR)
	}

	static clear()
	{
		localStorage.removeItem(LOCAL_STORAGE_ERROR)
	}
}

export default ErrorHandler