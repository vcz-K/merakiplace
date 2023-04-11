import styled from 'styled-components';

export const ArticleListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 80px 20px 105px 20px;
	width: 100%;
	gap: 8px;
	background-color: #f0f1f4;
`;

export const ArticleListItemWrapper = styled.li`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 104px;
	background-color: #fefefe;
	padding: 10px 20px;
	justify-content: space-between;
`;

export const ToplineWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 56px;
`;

export const HeadLineText = styled.div`
	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	width: calc(100% - 35px);
	font-size: 18px;
	font-weight: 600;
	line-height: 28px;
	letter-spacing: -0.05em;
	color: #000000;
`;

export const ScrapIconWrapper = styled.div`
	margin: 4px;
`;

export const BottomLineWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 20px;
`;

const BaseText = styled.div`
	font-size: 13px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: -0.05em;
`;

export const ByText = styled(BaseText)`
	width: calc(100% - 70px);
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #000000;
`;

export const DateText = styled(BaseText)`
	color: #6d6d6d;
`;
