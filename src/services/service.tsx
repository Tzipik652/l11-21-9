import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com";


export const searchPhotos = async (query : string) => {
  const cacheKey = `photos_${query}`;

  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  try {
    const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
      params: {
        query,
        per_page: 3,
        client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      },
    });
    const results = response.data.results;

    localStorage.setItem(cacheKey, JSON.stringify(results));

    return results;
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    throw error;
  }
};