import React from 'react';
import { Container, Img, AvatarArea } from './styles';
import Avatar from '../Avatar/index';

export interface HeaderProps {
    image?:string
}


const Header = ({image}:HeaderProps) => {
    const img = image ? image : require('../../assets/imgs/logo.png');
    return (
        <Container>
            <Img source={require('../../assets/imgs/header.png')}></Img>
            <AvatarArea>
                <Avatar
                    imageUrl={img}
                    size={100}
                    border={4}
                />
            </AvatarArea>

        </Container>
    )
}

export default Header;