import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #EAEEFF;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputArea = styled.View`
    padding:15px;
    width:100%;
`;

export const HeaderArea = styled.View`
    width: 100%;
    height: 50%;
`;

export const DateArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextField = styled.Text`
    font-size: ${(props:any) => props.fontSize ? props.fontSize+'px' : 18+'px'};
    padding-left: 10px;
    color: #707070;
`;

