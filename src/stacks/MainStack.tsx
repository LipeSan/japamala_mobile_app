import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//PAGES
import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainTab from '../stacks/MainTab';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const MainStack = () => {
    return (

        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Preload' component={Preload}></Stack.Screen>
            <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
            <Stack.Screen name='MainTab' component={MainTab}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainStack;