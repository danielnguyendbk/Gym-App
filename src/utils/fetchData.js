export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f5e1efe488msh9d59240bf4cae37p1c18d4jsnbf146d2f0ef1',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f5e1efe488msh9d59240bf4cae37p1c18d4jsnbf146d2f0ef1',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};