import moment from 'moment';
import { ReactComponent as FilledStarSvg } from '../../assets/icons/filledStar.svg';
import { ReactComponent as OutlinedStarSvg } from '../../assets/icons/outlinedStart.svg';
import { dayType } from '../../constant/day';
import { ArticleListProps } from './type';
import { useAppDispatch, useAppSelector } from '../../store';
import { ArticleListItem } from '../../store/slices/article/types';
import { setScrapList } from '../../store/slices/scrap/slice';
import { applyScrapped } from '../../store/slices/article/slice';
import {
	ArticleListContainer,
	ArticleListItemWrapper,
	ByText,
	BottomLineWrapper,
	DateText,
	HeadLineText,
	ScrapIconWrapper,
	ToplineWrapper,
} from './style';

const ArticleList = ({ list, setToastMessage }: ArticleListProps) => {
	const { scrapList } = useAppSelector((state) => state.scrap);
	const dispatch = useAppDispatch();

	const goDetail = (url: string) => {
		window.location.href = url;
	};

	const toggleScrap = (
		e: React.MouseEvent<HTMLDivElement>,
		item: ArticleListItem,
	) => {
		e.stopPropagation();
		let newScrapList = [];
		let message = '';
		if (item.scrap) {
			// 스크랩을 취소할 경우
			newScrapList = scrapList.filter((l) => l.id !== item.id);
			message = '스크랩이 해제되었습니다.';
		} else {
			// 스크랩할 경우
			newScrapList = [...scrapList, { ...item, scrap: true }];
			message = '기사가 스크랩되었습니다.';
		}
		dispatch(setScrapList(newScrapList));
		dispatch(applyScrapped(newScrapList));
		setToastMessage(message);
	};

	return (
		<ArticleListContainer>
			{list.map((l) => (
				<ArticleListItemWrapper
					key={l.id}
					onClick={() => goDetail(l.webUrl)}
				>
					<ToplineWrapper>
						<HeadLineText>{l.headLine}</HeadLineText>
						<ScrapIconWrapper onClick={(e) => toggleScrap(e, l)}>
							{l.scrap ? <FilledStarSvg /> : <OutlinedStarSvg />}
						</ScrapIconWrapper>
					</ToplineWrapper>
					<BottomLineWrapper>
						<ByText>{l.byLine}</ByText>
						<DateText>
							{`${moment(l.pubDate).format('YYYY.M.D')} (${
								dayType[Number(moment(l.pubDate).format('e'))]
							})`}
						</DateText>
					</BottomLineWrapper>
				</ArticleListItemWrapper>
			))}
		</ArticleListContainer>
	);
};

export default ArticleList;
