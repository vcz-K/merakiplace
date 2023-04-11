import moment from 'moment';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { FilterListProps } from './type';
import { FilterListContainer, FilterListItem, FilterText } from './style';

const FilterOptions = ({ setModalOn, filterData }: FilterListProps) => {
	const { headLine, date, nationList } = filterData;
	const selectedNationList = nationList.filter((nation) => nation.selected);
	let selectedNationLabel = '';
	if (!selectedNationList.length) {
		selectedNationLabel = '전체 국가';
	} else if (selectedNationList.length === 1) {
		selectedNationLabel = selectedNationList[0].name;
	} else {
		selectedNationLabel = `${selectedNationList[0].name} 외 ${
			selectedNationList.length - 1
		}개`;
	}

	return (
		<FilterListContainer>
			<FilterListItem
				onClick={() => setModalOn(true)}
				active={Boolean(headLine)}
			>
				<SearchIcon fill={headLine ? '#3478F6' : '#6D6D6D'} />
				<FilterText
					active={Boolean(headLine)}
					ellipsis={Boolean(headLine)}
				>
					{headLine ? headLine : '전체 헤드라인'}
				</FilterText>
			</FilterListItem>
			<FilterListItem
				onClick={() => setModalOn(true)}
				active={Boolean(date)}
			>
				<CalendarIcon fill={date ? '#3478F6' : '#6D6D6D'} />
				<FilterText active={Boolean(date)}>
					{date
						? moment(new Date(date)).format('YYYY.M.D')
						: '전체 날짜'}
				</FilterText>
			</FilterListItem>
			<FilterListItem
				onClick={() => setModalOn(true)}
				active={Boolean(selectedNationList.length)}
			>
				<FilterText active={Boolean(selectedNationList.length)}>
					{selectedNationLabel}
				</FilterText>
			</FilterListItem>
		</FilterListContainer>
	);
};

export default FilterOptions;
