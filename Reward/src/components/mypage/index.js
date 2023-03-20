import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {
  Button,
  Stack,
  TextInput,
  Avatar,
  ListItem,
} from '@react-native-material/core';
import {useSaveUserData} from '@hooks/login';
export const MyPage = () => {
  const {userInfo} = useSaveUserData();

  const userName = userInfo.user.name;
  const userEmail = userInfo.user.email;
  const userPoint = userInfo.user.point;
  const userPurchaseList = userInfo.user.purchaseList;
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
            //   trailing={
            //     <Button
            //       title="edit"
            //       style={{width: 100}}
            //       variant="text"
            //       onPress={() => test('sdfs')}
            //     />
            //   }
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
          {/* <ListItem
            title="Brunch this weekend?"
            secondaryText="I'll be in your neighborhood doing errands this…"
          />
          <ListItem
            title="Summer BBQ"
            secondaryText="Wish I could come, but I'm out of town this…"
          /> */}
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
      </View>
    </ScrollView>
  );
};
