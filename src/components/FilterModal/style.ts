import styled from 'styled-components';

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	padding: 20px;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-itmes: flex-start;
	gap: 40px;
	width: 100%;
	background: #ffffff;
	border-radius: 16px;
	padding: 20px;
`;

export const FilterTypeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	height: 76px;
`;

export const FilterTypeText = styled.div`
	height: 24px;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.05em;
`;

export const FilterInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px 20px;

	width: 100%;
	height: 44px;

	border: 1px solid #c4c4c4;
	border-radius: 8px;
`;

export const FilterInput = styled.input`
	height: 24px;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacint: -0.04em;
	width: 100%;
	border: unset;

	&::placeholder {
		color: #c4c4c4;
	}
`;

export const NationListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;

	height: 34px;
`;

export const NationListItem = styled.div<{ active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px 12px 4px;
	gap 4px;

	height: 34px;
	background: ${({ active }) => (active ? '#82b0f4' : '#ffffff')};

	border: 1px solid #f2f2f2;
	border-radius: 30px;

	font-wiehg: 400;
	font-size: 14px;
	line-height: 24px;
	color: ${({ active }) => (active ? '#ffffff' : '#6d6d6d')};
	letter-spacing: -0.04em;
`;

export const ApplyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60px;
	background: #3478f6;
	border-radius: 16px;
	margin-top: 40px;

	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.05em;
	color: #ffffff;
`;
