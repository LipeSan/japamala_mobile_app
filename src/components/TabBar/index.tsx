import React from 'react';
import Style from './styles';

//const FeedsIcon = require('../../assets/icons/feeds.svg');
import FeedsIcon from '../../assets/icons/feeds.svg';
import JapaMalaIcon from '../../assets/icons/japamala.svg';
import HistoryIcon from '../../assets/icons/history.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import LogoIcon from '../../assets/icons/logo.svg';

const TabBar = ({state, navigation}:any) => {
    
    const goTo = (page:string) => {
        navigation.navigate(page);
    }

    return (
        <Style.TabArea>
            <Style.TabItem onPress={() => goTo('Feeds')}>
                <FeedsIcon width='26' height='26' fill={state.index === 0 ? '#CC7F56' : '#C0C0C0'} />
            </Style.TabItem>
            <Style.TabItem onPress={() => goTo('JapaMala')}>
                <JapaMalaIcon width='26' height='26' fill={state.index === 1 ? '#CC7F56' : '#C0C0C0'} />
            </Style.TabItem>
            <Style.TabItemCenter onPress={() => goTo('About')}>
                <LogoIcon width='60' height='60' fill='#000' />
            </Style.TabItemCenter>
            <Style.TabItem onPress={() => goTo('History')}>
                <HistoryIcon width='30' height='30' fill={state.index === 3 ? '#CC7F56' : '#C0C0C0'} />
            </Style.TabItem>
            <Style.TabItem onPress={() => goTo('Settings')}>
                <SettingsIcon width='30' height='30' fill={state.index === 4 ? '#CC7F56' : '#C0C0C0'} />
            </Style.TabItem>
        </Style.TabArea>
    )
}

export default TabBar;
