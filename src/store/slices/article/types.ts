export interface ArticleState {
	page: number;
	articleList: ArticleListItem[];
}

interface ArticleListItem {
	id: string;
	webUrl: string;
	headLine: string;
	pubDate: Date;
	byLine: string;
}

export interface GetArticleListRes {
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
