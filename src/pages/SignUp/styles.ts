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

export const SignInMessageButton = styled.TouchableOpacity`
    flex-direction:row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignInMessageButtonText = styled.Text`
    font-size:16px;
    color:#707070;
`;

export const SignInMessageButtonTextBold = styled.Text`
    font-size:16px;
    color:#707070;
    font-weight: bold;
    margin-left: 7px;
`;