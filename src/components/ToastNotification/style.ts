import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const ToastNotificationWrapper = styled.div<{ visible: boolean }>`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 60px;
	background: #82b0f4;
	border-radius: 16px;
	bottom: 160px;

	font-size: 14px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: -0.05em;
	color: #ffffff;

	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	${({ visible }) =>
		visible
			? css`
					animation: ${fadeIn} 0.25s ease-out;
					transition: visibility 0.25s ease-out;
			  `
			: css`
					animation: ${fadeOut} 1.25s ease-out;
					transition: visibility 1.25s ease-out;
			  `}
`;
