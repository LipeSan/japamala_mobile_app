import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView` 
    background-color: #EAEEFF;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Img = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height:100%;
    justify-content: center;
`;

export const AvatarArea = styled.View`
    position: absolute;
    bottom: 20px;
`;