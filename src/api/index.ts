import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
	timeout: 300000,
	params: {
		// q: 'election',
		'api-key': process.env.REACT_APP_API_KEY,
		// 'fq': 'field-name:("value1", "value2")'
	},
});
