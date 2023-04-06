import styled from 'styled-components';

export const FilterListContainer = styled.ul`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 20px;
	background-color: #ffffff;
	gap: 7px;
`;

export const FilterListItem = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 6px 12px 4px;
	gap: 4px;

	border: 1px solid #c4c4c4;
	border-radius: 30px;
`;

export const FilterText = styled.div`
	font-size: 14px;
	height: 24px;
	line-height: 24px;
	color: #6d6d6d;
	font-weight: 400;
`;
