import FilterList from '../../components/FilterList';
import { HomeContainer } from './style';
import ArticleList from '../../components/ArticleList';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { getArticleList } from '../../store/slices/article/slice';

const Home = () => {
	const { articleList } = useAppSelector((state) => state.article);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getArticleList());
	}, [dispatch]);

	return (
		<HomeContainer>
			<FilterList />
			<ArticleList list={articleList} />
		</HomeContainer>
	);
};

export default Home;
