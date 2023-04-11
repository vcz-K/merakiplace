import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../../api';
import {
	ApplyScrappedPayload,
	ArticleState,
	GetArticleListPayload,
	SetFilterDataPayload,
} from './types';
import { ThunkApiType } from '../../index';
import { nationList } from '../../../constant/nationList';
import moment from 'moment';

const initialState: ArticleState = {
	page: -1,
	articleList: [],
	filterHeadLine: '',
	filterDate: '',
	filterNationList: nationList,
	isFinish: false, // 더이상 받아올 데이터가 없는경우(최근에 받은 데이터가 10개 미만인 경우)
};

export const getArticleList = createAsyncThunk<
	GetArticleListPayload, // Return type of the payload creator
	void, // First argument to the payload creatotr
	ThunkApiType // Types for ThunkAPI
>('article/getArticleList', async (_, { getState }) => {
	const { article, scrap } = getState();
	let articleList = [];
	if (!article.isFinish) {
		let params: any = {
			page: article.page,
		};
		if (article.filterDate) {
			params.begin_date = moment(article.filterDate).format('YYYYMMDD');
			params.end_date = moment(article.filterDate).format('YYYYMMDD');
		}
		if (article.filterHeadLine) {
			params.fq = `headline:("${article.filterHeadLine}")`;
		}
		const { data } = await api.get('/', { params });
		articleList = data.response.docs;
	}
	return {
		articleList: articleList,
		scrapList: scrap.scrapList,
	};
});

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		initPage(state) {
			state.page = -1;
		},
		addPage(state) {
			state.page = state.page + 1;
		},
		setFilterData(state, { payload }: PayloadAction<SetFilterDataPayload>) {
			state.filterHeadLine = payload.headLine;
			// redux의 non-serializable value 관련 이슈
			if (payload.date) {
				state.filterDate = new Date(payload.date).toISOString();
			} else {
				state.filterDate = '';
			}
			state.filterNationList = payload.nationList;
		},
		applyScrapped(state, { payload }: PayloadAction<ApplyScrappedPayload>) {
			const scrappedIds = payload.map((p) => p.id);
			for (const a of state.articleList) {
				a.scrap = scrappedIds.includes(a.id);
			}
		},
		setIsFinish(state, { payload }) {
			state.isFinish = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getArticleList.pending, (state, action) => {})
			.addCase(getArticleList.fulfilled, (state, { payload }) => {
				const { articleList, scrapList } = payload;
				const newArticleList = articleList.map((a) => ({
					id: a._id,
					webUrl: a.web_url,
					headLine: a.headline.main,
					pubDate: a.pub_date,
					byLine: a.byline.original,
					scrap: false,
				}));

				// 스크랩 상태 적용
				const scrappedIds = scrapList.map((p) => p.id);
				for (const a of newArticleList) {
					a.scrap = scrappedIds.includes(a.id);
				}

				if (state.page === 0) {
					state.articleList = newArticleList;
				} else {
					state.articleList = [
						...state.articleList,
						...newArticleList,
					];
				}

				if (newArticleList.length < 10) {
					state.isFinish = true;
				}
			})
			.addCase(getArticleList.rejected, (state, action) => {});
	},
});

export const { initPage, addPage, setFilterData, applyScrapped, setIsFinish } =
	articleSlice.actions;
export default articleSlice;
