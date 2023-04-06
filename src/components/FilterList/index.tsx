import { FilterListContainer, FilterListItem, FilterText } from './style';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';

const FilterList = () => {
	return (
		<FilterListContainer>
			<FilterListItem>
				<SearchIcon />
				<FilterText>전체 헤드라인</FilterText>
			</FilterListItem>
			<FilterListItem>
				<CalendarIcon />
				<FilterText>전체 날짜</FilterText>
			</FilterListItem>
			<FilterListItem>
				<FilterText>전체 국가</FilterText>
			</FilterListItem>
		</FilterListContainer>
	);
};

export default FilterList;
