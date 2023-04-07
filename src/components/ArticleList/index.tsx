import {
	ArticleListContainer,
	ArticleListItem,
	ByText,
	BottomLineWrapper,
	DateText,
	HeadLineText,
	ScrapIconWrapper,
	ToplineWrapper,
} from './style';
import { ArticleListProps } from './type';
import { ReactComponent as FilledStarSvg } from '../../assets/icons/filledStar.svg';
import { ReactComponent as OutlinedStarSvg } from '../../assets/icons/outlinedStart.svg';
import moment from 'moment';
import { dayType } from '../../constant/day';
import { useState, useRef, useEffect } from 'react';
import { setPage } from '../../store/slices/article/slice';

const ArticleList = ({ list }: ArticleListProps) => {
	return (
		<ArticleListContainer>
			{list.map((l) => (
				<ArticleListItem key={l.id}>
					<ToplineWrapper>
						<HeadLineText>{l.headLine}</HeadLineText>
						<ScrapIconWrapper>
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
				</ArticleListItem>
			))}
		</ArticleListContainer>
	);
};

export default ArticleList;
