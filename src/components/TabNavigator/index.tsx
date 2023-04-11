import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as ScrapIcon } from '../../assets/icons/scrap.svg';
import { TabStatus } from '../../constant/tabStatus';
import { TabButtonWrapper, TabNavigatorContainer, TabText } from './style';

const TabNavigator = () => {
	const [currTab, setCurrTab] = useState<TabStatus>(TabStatus.HOME);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/scrap') {
			setCurrTab(TabStatus.SCRAP);
		} else {
			setCurrTab(TabStatus.HOME);
		}
	}, [location]);

	return (
		<TabNavigatorContainer>
			<TabButtonWrapper to='/'>
				<HomeIcon
					fill={currTab === TabStatus.HOME ? '#FFFFFF' : '#6D6D6D'}
				/>
				<TabText
					color={currTab === TabStatus.HOME ? '#FFFFFF' : '#6D6D6D'}
				>
					홈
				</TabText>
			</TabButtonWrapper>
			<TabButtonWrapper to='/scrap'>
				<ScrapIcon
					stroke={currTab === TabStatus.SCRAP ? '#FFFFFF' : '#6D6D6D'}
				/>
				<TabText
					color={currTab === TabStatus.SCRAP ? '#FFFFFF' : '#6D6D6D'}
				>
					스크랩
				</TabText>
			</TabButtonWrapper>
		</TabNavigatorContainer>
	);
};

export default TabNavigator;
