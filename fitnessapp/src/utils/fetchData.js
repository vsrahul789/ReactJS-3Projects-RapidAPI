import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'c91cc1dbbemshbf619a72bc7fc43p1897fajsnbe83a36bc963',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

try {
	const response = await axios.request(exerciseOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };