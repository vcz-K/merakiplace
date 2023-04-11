import { useEffect, useRef, useState } from 'react';
import ArticleList from '../../components/ArticleList';
import { useAppDispatch, useAppSelector } from '../../store';
import FilterOptions from '../../components/FilterOptions';
import FilterModal from '../../components/FilterModal';
import ToastNotification from '../../components/ToastNotification';
import { setFilterData } from '../../store/slices/article/slice';
import { SetFilterDataPayload } from '../../store/slices/article/types';
import useDidMountEffect from '../../hooks/useDidMountEffect';
import {
	addPage,
	getArticleList,
	initPage,
	setIsFinish,
} from '../../store/slices/article/slice';
import { HomeContainer } from './style';

const Home = () => {
	const { page, articleList, filterHeadLine, filterDate, filterNationList } =
		useAppSelector((state) => state.article);
	const [modalOn, setModalOn] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const target = useRef(null);
	const dispatch = useAppDispatch();
	const filterData = {
		headLine: filterHeadLine,
		date: filterDate,
		nationList: filterNationList,
	};

	const setArticleFilterOptions = (data: SetFilterDataPayload) => {
		dispatch(initPage());
		dispatch(setIsFinish(false));
		dispatch(setFilterData(data));
	};

	useDidMountEffect(() => {
		if (page > -1) {
			dispatch(getArticleList());
		}
	}, [dispatch, page]);

	useDidMountEffect(() => {
		dispatch(addPage());
	}, [dispatch, filterHeadLine, filterDate]);

	useEffect(() => {
		// 무한스크롤을 위한 옵저버 구현
		const options = {
			root: null,
			rootMargin: '0px 0px 85px 0px',
			threshold: 1.0,
		};

		let callback = (entries: any) => {
			if (entries[0].isIntersecting) {
				dispatch(addPage());
			}
		};

		const observer = new IntersectionObserver(callback, options);

		if (target && target.current) {
			observer.observe(target.current);
		}
	}, [dispatch]);

	return (
		<HomeContainer>
			<FilterOptions setModalOn={setModalOn} filterData={filterData} />
			<ArticleList list={articleList} setToastMessage={setToastMessage} />
			<div ref={target} />
			{modalOn && (
				<FilterModal
					setModalOn={setModalOn}
					applyFilterData={setArticleFilterOptions}
					filterOptions={filterData}
				/>
			)}
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
			/>
		</HomeContainer>
	);
};

export default Home;
