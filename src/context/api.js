import axios from "axios";

/**
 * Get all podcasts whitch talk about 'podcast'
 * @param {number} limit 
 * @returns 
 */
const api = async (limit = 100) => {
  let src =
    "https://itunes.apple.com/search?term=podcast&media=podcast&limits=" +
    limit;

  return await axios.get(src);
};

/**
 * Search the casts with an keyword
 * @param {string} searchKeyword 
 * @param {number} limit 
 * @returns 
 */
export const search = async (searchKeyword, limit = 100) => {
  let src = `https://itunes.apple.com/search?term=${searchKeyword}&media=podcast&limits=${limit}`;

  return await axios.get(src);
};

/**
 * getAudioByFeed is function that take urlFeed and return audioUrl
 * @param {string} url 
 * @returns 
 */
export const getAudioByFeed = async (url) => {
  let res = await axios.get(url);
  const encStart = res.data.indexOf("<enclosure");
  const urlStart = res.data.slice(encStart, encStart + 400).indexOf("url");
  const end = res.data
    .slice(encStart + urlStart + 5, encStart + 400)
    .indexOf('"');
  return res.data.slice(urlStart + encStart + 5, encStart + urlStart + end);
};

export default api;
