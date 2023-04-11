import { useEffect } from 'react';
import { ToastNotificationProps } from './type';
import { ToastNotificationWrapper } from './style';

let timer: NodeJS.Timeout;

const ToastNotification = ({ message, setMessage }: ToastNotificationProps) => {
	useEffect(() => {
		// 2초후 토스트 메세지 삭제
		clearTimeout(timer);
		timer = setTimeout(() => {
			setMessage('');
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [message, setMessage]);

	return (
		<ToastNotificationWrapper visible={Boolean(message)}>
			{message}
		</ToastNotificationWrapper>
	);
};

export default ToastNotification;
