import { ScrapState } from './types';
import { nationList } from '../../../constant/nationList';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SetFilterDataPayload } from '../article/types';
import moment from 'moment';

const initialState: ScrapState = {
	scrapList: [],
	filteredScrapList: [],
	filterHeadLine: '',
	filterDate: '',
	filterNationList: nationList,
};

export const scrapSlice = createSlice({
	name: 'scrap',
	initialState,
	reducers: {
		setScrapList(state, { payload }) {
			state.scrapList = payload;
		},
		setFilterData(state, { payload }: PayloadAction<SetFilterDataPayload>) {
			state.filterHeadLine = payload.headLine;
			// redux의 non-serializable value 관련 이슈때문에 stringify 적용
			if (payload.date) {
				state.filterDate = new Date(payload.date).toISOString();
			} else {
				state.filterDate = '';
			}
			state.filterNationList = payload.nationList;
		},
		filterScrapList(state) {
			if (state.filterHeadLine || state.filterDate) {
				// 필터 조건이 있을경우
				const filteredScrapList = state.scrapList.filter((s) => {
					if (
						state.filterHeadLine &&
						s.headLine.includes(state.filterHeadLine)
					) {
						return true;
					} else if (
						moment(s.pubDate).format('YYYYMMDD') ===
						moment(state.filterDate).format('YYYYMMDD')
					) {
						return true;
					}
					return false;
				});
				state.filteredScrapList = filteredScrapList;
			} else {
				// 필터 조건이 없을경우
				state.filteredScrapList = state.scrapList;
			}
		},
	},
});

export const { setScrapList, setFilterData, filterScrapList } =
	scrapSlice.actions;
export default scrapSlice;
