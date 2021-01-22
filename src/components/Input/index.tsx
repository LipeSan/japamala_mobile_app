import React from 'react';
import { InputCustom, Input } from './styles';

export interface InputProps {
    IconSvg?:any,
    backgroundColor?:string;
    placeholder?:string;
    secureTextEntry?:boolean;
    value:string;
    onChangeText: any;
}

const FatInput = ({IconSvg, backgroundColor, placeholder, secureTextEntry, value, onChangeText}:InputProps) => {
    const inputBackgroundColor = backgroundColor ? backgroundColor : '#f5f5f5f5'
    return (
        <InputCustom style={{backgroundColor:inputBackgroundColor}}>
            {IconSvg ? <IconSvg></IconSvg> : null }
            <Input
                placeholder={placeholder}
                placeholderTextColor='#707070'
                secureTextEntry= {secureTextEntry ? secureTextEntry : false}
                value={value}
                onChangeText={onChangeText}
            />
        </InputCustom>
    )
}

export default FatInput;