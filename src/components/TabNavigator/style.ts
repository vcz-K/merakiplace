import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TabNavigatorContainer = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 85px;
	background: #000000;
	border-radius: 30px;
`;

export const TabButtonWrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 10px;
	align-items: center;
	justify-content: center;
	text-decoration: none;
`;

export const TabText = styled.div<{ color: string }>`
	font-size: 10px;
	color: ${({ color }) => color};
`;
