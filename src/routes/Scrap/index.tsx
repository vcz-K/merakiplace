import { useState, useEffect } from 'react';
import ArticleList from '../../components/ArticleList';
import EmptyScrap from '../../components/EmptyScrap';
import FilterOptions from '../../components/FilterOptions';
import { useAppDispatch, useAppSelector } from '../../store';
import FilterModal from '../../components/FilterModal';
import ToastNotification from '../../components/ToastNotification';
import { SetFilterDataPayload } from '../../store/slices/article/types';
import { filterScrapList, setFilterData } from '../../store/slices/scrap/slice';
import { ScrapContainer } from './style';

const Scrap = () => {
	const [modalOn, setModalOn] = useState(false);
	const {
		scrapList,
		filteredScrapList,
		filterHeadLine,
		filterDate,
		filterNationList,
	} = useAppSelector((state) => state.scrap);
	const [toastMessage, setToastMessage] = useState('');
	const dispatch = useAppDispatch();
	const filterData = {
		headLine: filterHeadLine,
		date: filterDate,
		nationList: filterNationList,
	};

	const setScrapFilterOptions = (data: SetFilterDataPayload) => {
		dispatch(setFilterData(data));
		dispatch(filterScrapList());
	};

	useEffect(() => {
		dispatch(filterScrapList());
	}, [dispatch, scrapList]);

	return (
		<ScrapContainer>
			{scrapList.length ? (
				<>
					<FilterOptions
						setModalOn={setModalOn}
						filterData={filterData}
					/>
					<ArticleList
						list={filteredScrapList}
						setToastMessage={setToastMessage}
					/>
					{modalOn && (
						<FilterModal
							setModalOn={setModalOn}
							applyFilterData={setScrapFilterOptions}
							filterOptions={filterData}
						/>
					)}
				</>
			) : (
				<EmptyScrap />
			)}
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
			/>
		</ScrapContainer>
	);
};

export default Scrap;
