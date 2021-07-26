const host = process.env.REACT_APP_HOST;
const path = process.env.REACT_APP_PATH;

export const getInfluencersURL = () => `${host}/${path}`;
