import Axios from "axios";

class RestAPI {
  SendRequest = (method, url, params, data, headers) =>
    Axios.request({
      method,
      url,
      params,
      data,
      auth: {
        username: "sponsokit_search_example",
        password: "10c3c28026f540b480a9a0896f04ebee",
      },
      headers,
    });
}

export default RestAPI;
