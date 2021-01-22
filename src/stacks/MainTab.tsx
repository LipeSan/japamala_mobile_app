import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//PAGES
import Feeds from '../pages/Feeds'
import JapaMala from '../pages/JapaMala'
import About from '../pages/About'
import History from '../pages/History'
import Settings from '../pages/Settings'
import TabBar from '../components/TabBar';

const Tabs = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tabs.Navigator tabBar={props => <TabBar {...props}/>}>
            <Tabs.Screen name='Feeds' component={Feeds} ></Tabs.Screen>
            <Tabs.Screen name='JapaMala' component={JapaMala} ></Tabs.Screen>
            <Tabs.Screen name='About' component={About} ></Tabs.Screen>
            <Tabs.Screen name='History' component={History} ></Tabs.Screen>
            <Tabs.Screen name='Settings' component={Settings}></Tabs.Screen>
        </Tabs.Navigator>
    )
}

export default MainTab;