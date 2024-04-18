export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (endpoint, options) => {
  const baseURL = 'https://exercisedb.p.rapidapi.com/exercises';
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('API quota exceeded');
    } else {
      throw new Error(`Error fetching data: ${response.status}`);
    }
  }

  const data = await response.json();
  return data;
};