
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';
import Spinner from 'react-native-loading-spinner-overlay';
import axiosInstance from './src/services/interceptor';

const App = () => {
  axiosInstance;
  return(
    <UserContextProvider>
      <Spinner
        visible={false}
      ></Spinner>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}


export default App;
