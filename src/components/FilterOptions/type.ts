import { NationListItem } from '../../store/slices/article/types';

export interface FilterListProps {
	setModalOn: (modalOn: boolean) => void;
	filterData: {
		headLine: string;
		date: string;
		nationList: NationListItem[];
	};
}
