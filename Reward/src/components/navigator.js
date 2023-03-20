import React, {useEffect} from 'react';
import {useSaveUserData} from '@hooks/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './login';
import {Home} from './home';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export const Navigator = () => {
  const {userInfo} = useSaveUserData();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.user ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
