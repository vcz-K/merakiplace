import { ReactComponent as EmptyScrapIcon } from '../../assets/icons/emptyScrap.svg';
import { EmptyBackground, EmptyScrapText, GoHomeButton } from './style';

const EmptyScrap = () => {
	return (
		<EmptyBackground>
			<EmptyScrapIcon />
			<EmptyScrapText>저장된 스크랩이 없습니다.</EmptyScrapText>
			<GoHomeButton to='/'>스크랩 하러 가기</GoHomeButton>
		</EmptyBackground>
	);
};

export default EmptyScrap;
