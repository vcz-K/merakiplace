export interface ArticleState {
	page: number;
	articleList: ArticleListItem[];
	filterHeadLine: string;
	filterDate: string;
	filterNationList: NationListItem[];
	isFinish: boolean;
}

export interface ArticleListItem {
	id: string;
	webUrl: string;
	headLine: string;
	pubDate: Date;
	byLine: string;
	scrap: boolean;
}

interface GetArticleListRes {
	status: string;
	copyright: string;
	response: {
		docs: {
			abstract: string;
			web_url: string;
			snippet: string;
			lead_paragraph: string;
			source: string;
			headline: {
				main: string;
			};
			keywords: {
				name: string;
				value: string;
				rank: number;
				major: string;
			}[];
			pub_date: Date;
			news_desk: string;
			section_name: string;
			subsection_name: string;
			byline: {
				original: string;
				person: {
					firstname: string;
					middlename: string | null;
					lastname: string | null;
					organization: string;
					rank: number;
				}[];
			};
			_id: string;
		}[];
	};
}

export interface NationListItem {
	name: string;
	val: string;
	selected: boolean;
}

export interface SetFilterDataPayload {
	headLine: string;
	date: Date | null;
	nationList: NationListItem[];
}

export type ApplyScrappedPayload = ArticleListItem[];

export interface GetArticleListPayload {
	articleList: GetArticleListRes['response']['docs'];
	scrapList: ArticleListItem[];
}
