import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
	timeout: 300000,
	params: {
		'api-key': process.env.REACT_APP_API_KEY,
		fl: '_id,web_url,headline,pub_date,byline',
	},
});
