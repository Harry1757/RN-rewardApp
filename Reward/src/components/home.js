import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyPage} from './mypage/index';
import {ADPage} from './ AD';
const Tab = createBottomTabNavigator();
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
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
        <Tab.Screen name="Market" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
};
