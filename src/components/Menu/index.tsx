import React from "react";
import Style from "./styles";

import FavouritesIcon from '../../assets/icons/favourites.svg';
import CoinsIcon from '../../assets/icons/coins.svg';
import RightIcon from '../../assets/icons/right.svg';
import SoundsIcon from '../../assets/icons/sounds.svg';
import ThemesIcon from '../../assets/icons/themes.svg';
import LogoutIcon from '../../assets/icons/logout.svg';

export interface AvatarProps {
    type: number,
    textFirst: string,
    textSecond?: string,
}

const Menu = ({ type, textFirst, textSecond }: AvatarProps) => {

    const getIcon = (type: number) => {
        switch (type) {
            case 1:
                return (
                    <FavouritesIcon width='36' height='36' fill={'black'}></FavouritesIcon>
                )
            case 2:
                return (
                    <CoinsIcon width='36' height='36' fill={'black'}></CoinsIcon>
                )
            case 3:
                return (
                    <RightIcon width='36' height='36' fill={'black'}></RightIcon>
                )
            case 4:
                return (
                    <SoundsIcon width='36' height='36' fill={'black'}></SoundsIcon>
                )
            case 5:
                return (
                    <ThemesIcon width='36' height='36' fill={'black'}></ThemesIcon>
                )
            case 6:
                return (
                    <LogoutIcon width='36' height='36' fill={'black'}></LogoutIcon>
                )
        }
    }

    return (
        <Style.Container>
            <Style.IconAndTextArea>
                {getIcon(type)}
                <Style.TextArea>
                    <Style.MenuText fontSize={18}>{textFirst}</Style.MenuText>
                    {textSecond ? <Style.MenuText fontSize={14}>{textSecond}</Style.MenuText> : null}
                </Style.TextArea>
            </Style.IconAndTextArea>
            {getIcon(3)}
        </Style.Container>
    )
}

export default Menu;