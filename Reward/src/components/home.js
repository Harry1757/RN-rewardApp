import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyPage} from './mypage';
import {ADPage} from './ AD';
import {Market} from './market';
const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <View style={{height: '100%'}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarStyle: {backgroundColor: 'powderblue'},
          tabBarShowIcon: true,
        }}>
        <Tab.Screen name="MyPage" component={MyPage} />
        <Tab.Screen name="AD" component={ADPage} />
        <Tab.Screen name="Market" component={Market} />
      </Tab.Navigator>
    </View>
  );
};
