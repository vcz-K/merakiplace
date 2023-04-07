import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { ArticleState, GetArticleListRes } from './types';
import { ThunkApiType } from '../../index';

const initialState: ArticleState = {
	page: 0,
	articleList: [],
};

export const getArticleList = createAsyncThunk<
	GetArticleListRes, // Return type of the payload creator
	void, // First argument to the payload creatotr
	ThunkApiType // Types for ThunkAPI
>('article/getArticleList', async (_, { getState }) => {
	const { article } = getState();
	const params = {
		page: article.page,
	};
	const { data } = await api.get('/', { params });
	return data;
});

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		setPage(state, { payload }) {
			state.page = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getArticleList.pending, (state, action) => {})
			.addCase(getArticleList.fulfilled, (state, { payload }) => {
				// console.log(docs.indexOf(d));
				// console.log(d.headline.main);
				// console.log(d.pub_date);
				// console.log(d.byline.original);
				// console.log(
				// 	`${d.byline.person[0].firstname} ${d.byline.person[0].lastname}`,
				// );
				state.articleList = payload.response.docs.map((d) => ({
					id: d._id,
					webUrl: d.web_url,
					headLine: d.headline.main,
					pubDate: d.pub_date,
					byLine: d.byline.original,
					scrap: payload.response.docs.indexOf(d) % 2 === 0,
				}));
			})
			.addCase(getArticleList.rejected, (state, action) => {});
	},
});

export const { setPage } = articleSlice.actions;
export default articleSlice;
