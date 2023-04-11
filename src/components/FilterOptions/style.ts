import styled, { css } from 'styled-components';

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

export const FilterListItem = styled.li<{ active: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 6px 12px 4px;
	gap: 4px;

	border: 1px solid ${({ active }) => (active ? '#82B0F4' : '#c4c4c4')};
	border-radius: 30px;
`;

export const FilterText = styled.div<{ active: boolean; ellipsis?: boolean }>`
	${({ ellipsis }) =>
		ellipsis &&
		css`
			display: block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 65px;
		`}

	height: 24px;
	font-size: 14px;
	line-height: 24px;
	color: ${({ active }) => (active ? '#3478F6' : '#6d6d6d')};
	font-weight: 400;
	letter-spacing: -0.04em;
`;
