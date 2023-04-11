import { useEffect, useState, useRef, forwardRef, createElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { FilterModalProps, CustomDatePickerProps } from './type';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import {
	FilterInputWrapper,
	FilterInput,
	FilterTypeText,
	FilterTypeWrapper,
	ModalBackground,
	ModalContainer,
	NationListWrapper,
	NationListItem,
	ApplyButton,
} from './style';

const FilterModal = ({
	setModalOn,
	applyFilterData,
	filterOptions,
}: FilterModalProps) => {
	const {
		headLine: filterHeadLine,
		date: filterDate,
		nationList: filterNationList,
	} = filterOptions;
	const [headLine, setHeadLine] = useState(filterHeadLine);
	const [date, setDate] = useState(filterDate ? new Date(filterDate) : null);
	const [nations, setNations] = useState(filterNationList);
	const datePickerRef = useRef<DatePicker>(null);

	const disableScroll = () => {
		document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
	};

	const enableScroll = () => {
		const scrollY = document.body.style.top;
		document.body.style.cssText = '';
		window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
	};

	const applyFilter = () => {
		applyFilterData({
			headLine,
			date,
			nationList: nations,
		});
		setModalOn(false);
	};

	const handleDateSelected = (date: Date) => {
		if (filterDate && new Date(date).toISOString() === filterDate) {
			// 선택되어있는 날짜와 동일한 날짜 선택시 날짜값 초기화
			setDate(null);
		} else {
			setDate(date);
		}
	};

	const handleDateChange = (e: any) => {};

	const selectNation = (val: string) => {
		const newNationList = nations.map((nation) => {
			if (nation.val === val) {
				return {
					...nation,
					selected: !nation.selected,
				};
			}
			return nation;
		});
		setNations(newNationList);
	};

	useEffect(() => {
		// 모달이 켜져있는 상태에서는 scroll disable
		disableScroll();
		return () => {
			enableScroll();
		};
	}, []);

	useEffect(() => {}, []);

	return (
		<ModalBackground onClick={() => setModalOn(false)}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<FilterTypeWrapper>
					<FilterTypeText>헤드라인</FilterTypeText>
					<FilterInputWrapper>
						<FilterInput
							placeholder='검색하실 헤드라인을 입력해주세요.'
							value={headLine}
							onChange={(e) => setHeadLine(e.target.value)}
						/>
					</FilterInputWrapper>
				</FilterTypeWrapper>

				<FilterTypeWrapper>
					<FilterTypeText>날짜</FilterTypeText>
					<DatePicker
						locale={ko}
						selected={date}
						onSelect={handleDateSelected}
						onChange={handleDateChange}
						dateFormat='yyyy.MM.dd'
						customInput={createElement(CustomDatePicker)}
						ref={datePickerRef}
					/>
				</FilterTypeWrapper>

				<FilterTypeWrapper>
					<FilterTypeText>국가</FilterTypeText>
					<NationListWrapper>
						{nations.map((n) => (
							<NationListItem
								key={n.val}
								active={n.selected}
								onClick={() => selectNation(n.val)}
							>
								{n.name}
							</NationListItem>
						))}
					</NationListWrapper>
				</FilterTypeWrapper>

				<ApplyButton onClick={applyFilter}>필터 적용하기</ApplyButton>
			</ModalContainer>
		</ModalBackground>
	);
};

const CustomDatePicker = forwardRef(
	({ value, onClick }: CustomDatePickerProps, ref) => {
		return (
			<FilterInputWrapper>
				<FilterInput
					value={value}
					readOnly
					onClick={onClick}
					placeholder='날짜를 선택해주세요.'
				/>
				<CalendarIcon fill='#c4c4c4' />
			</FilterInputWrapper>
		);
	},
);

export default FilterModal;
