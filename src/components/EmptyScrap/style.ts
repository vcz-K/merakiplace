import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmptyBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #f0f1f4;
	width: 100%;
	height: 100%;
	padding: 40px;
`;

export const EmptyScrapText = styled.div`
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	letter-spacing: -0.05em;
	color: #6d6d6d;
	margin-top: 8px;
`;

export const GoHomeButton = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60px;
	background: #3478f6;
	color: #ffffff;
	border-radius: 16px;
	margin-top: 20px;

	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.05em;
	text-decoration: none;
`;
