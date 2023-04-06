import FilterList from '../../components/FilterList';
import { HomeContainer } from './style';
import ArticleList from '../../components/ArticleList';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { getArticleList } from '../../store/slices/article/slice';

const Home = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getArticleList());
	}, [dispatch]);

	return (
		<HomeContainer>
			<FilterList />
			<ArticleList />
		</HomeContainer>
	);
};

export default Home;
