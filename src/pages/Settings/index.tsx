import React, { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import Style from './styles';
import Menu from '../../components/Menu';
import { useNavigation } from '@react-navigation/native';

const img = require('../../assets/imgs/avatar-demo.png');


const Settings = () => {

    const navigation = useNavigation();

    //STATE
    const [time, setTime] = useState('');

    const menuList = [
        { type: 1, textFirst: 'Favourites', textSecond: undefined },
        { type: 4, textFirst: 'Sounds', textSecond: undefined },
        { type: 5, textFirst: 'Themes', textSecond: undefined },
        { type: 2, textFirst: 'Coins', textSecond: 'You have 1,000 coins!' },
        { type: 6, textFirst: 'Logout', textSecound: undefined}
    ]


    //METHODS
    const getTime = () => {
        let time = new Date().getHours();
        if (time >= 5 && time <= 12) {
            setTime('Good morning!');
        } else if (time >= 13 && time <= 18) {
            setTime('Good evening!');
        } else {
            setTime('Good afternoon!');
        }
    }

    const goToPage = (page:string) => {
        navigation.navigate(page);
    }

    useEffect(() => {
        getTime();
    }, [])

    return (
        <Style.Container>
            <Style.ScrollView>
                <Style.Profile onPress={() => goToPage('Profile')}>
                    <Style.NameArea>
                        <Style.NameText>Filipe Fernandes</Style.NameText>
                        <Style.TimeText>{time}</Style.TimeText>
                    </Style.NameArea>
                    <Avatar
                        imageUrl={img}
                        size={60}
                        border={1}
                    />
                </Style.Profile>
                <Style.MenuArea>
                    {menuList.map(element => (
                        <Menu type={element.type} textFirst={element.textFirst} textSecond={element.textSecond}></Menu>
                    ))}
                </Style.MenuArea>


            </Style.ScrollView>
        </Style.Container>
    )
}

export default Settings;