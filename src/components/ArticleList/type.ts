import { ArticleListItem } from '../../store/slices/article/types';

export interface ArticleListProps {
	list: ArticleListItem[];
	setToastMessage: (message: string) => void;
}
