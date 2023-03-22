import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {
  Button,
  Stack,
  TextInput,
  Avatar,
  ListItem,
} from '@react-native-material/core';
import {useSetUser} from '@hooks/setUser';
import {deleteUserData} from '@services/setUserData';

export const MyPage = () => {
  const {userInfo, setUserData} = useSetUser();
  const userName = userInfo.user.name;
  const userEmail = userInfo.user.email;
  const userPoint = userInfo.user.point;
  const userPurchaseList = userInfo.user.purchaseList;

  const removeData = () => {
    deleteUserData();
    setUserData('');
  };

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          height: '100%',
        }}>
        <Stack style={{width: '100%', alignItems: 'center', marginTop: 30}}>
          <Avatar label={userName} autoColor size={100} />
        </Stack>
        <Stack spacing={2} style={{margin: 26}}>
          <TextInput
            label="Name"
            value={userName}
            variant="outlined"
            editable={false}
          />
        </Stack>
        <Stack spacing={2} style={{margin: 26}}>
          <TextInput
            label="Email"
            value={userEmail}
            variant="outlined"
            disabled
            editable={false}
          />
        </Stack>
        <Stack spacing={2} style={{margin: 26}}>
          <TextInput
            label="Point"
            value={userPoint ? userPoint : '0'}
            variant="outlined"
            disabled
            editable={false}
          />
        </Stack>
        <Stack spacing={2} style={{margin: 26}}>
          <Text style={{padding: 10}}>구매목록</Text>
          {userPurchaseList ? (
            userPurchaseList.map((value, index) => (
              <ListItem
                key={index}
                title={value.title}
                secondaryText={`${value.point}p`}
              />
            ))
          ) : (
            <ListItem title="구매 이력 없음" />
          )}
        </Stack>
        <Stack spacing={2} style={{margin: 26}}>
          <Button title="탈퇴하기" onPress={removeData} />
        </Stack>
      </View>
    </ScrollView>
  );
};
