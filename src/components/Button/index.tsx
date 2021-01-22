import React from 'react';
import { ButtonCustom, ButtonText } from './styles';

export interface ButtonProps {
    text:string,
    onPress: any,
    backgroundColor?:string
}

const FatButton = ({text, onPress, backgroundColor}:ButtonProps) => {
    const buttonBackgroundColor = backgroundColor ? backgroundColor : "#f5f5f5f"
    return (
        <ButtonCustom style={{backgroundColor:buttonBackgroundColor}} onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </ButtonCustom>
    )
}

export default FatButton;