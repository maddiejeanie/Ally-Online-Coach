export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (endpoint, customOptions = {}) => {
  const baseURL = "https://exercisedb.p.rapidapi.com/exercises";
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, { ...options, ...customOptions });
  const data = await response.json();

  return data;
};
