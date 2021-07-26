import RestAPI from "../../../rest/ResiAPI";
import { getInfluencersURL } from "../../../rest/URLs";

const api = new RestAPI();

export const GetInfluencers = (data) =>
  api
    .SendRequest("post", getInfluencersURL(), {}, data)
    .then((response) => response.data);
