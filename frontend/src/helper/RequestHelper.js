class RequestHelper {

  constructor(baseURL) {
    this.BASE_URL = baseURL;
  }

  shortenURL = async (url, hash) => {
    
    let endpoint = `${this.BASE_URL}/Links`;
    let body = JSON.stringify({
      URL: url,
      hash: hash,
    });

    const request = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    });

    await this.validateResponse(request);
    return request.json();

  }


  validateResponse = async (response) => {
    if(!response.ok) {
      if(response.body) {
        let body = await response.json();
        throw new Error(body.errorMessage);
      } else {
        throw new Error(response.statusText);
      }  
    }
    return response;
  }

}

export default new RequestHelper('http://localhost:3001');