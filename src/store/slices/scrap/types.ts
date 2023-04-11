import { ArticleListItem, NationListItem } from '../article/types';

export interface ScrapState {
	scrapList: ArticleListItem[];
	filteredScrapList: ArticleListItem[];
	filterHeadLine: string;
	filterDate: string;
	filterNationList: NationListItem[];
}
