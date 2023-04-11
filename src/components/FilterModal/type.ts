import {
	NationListItem,
	SetFilterDataPayload,
} from '../../store/slices/article/types';

export interface FilterModalProps {
	setModalOn: (modalOn: boolean) => void;
	applyFilterData: (data: SetFilterDataPayload) => void;
	filterOptions: {
		headLine: string;
		date: string;
		nationList: NationListItem[];
	};
}

export interface CustomDatePickerProps {
	value: string;
	onClick: () => void;
}
