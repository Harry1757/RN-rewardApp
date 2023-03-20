import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {
  Button,
  Stack,
  TextInput,
  Avatar,
  ListItem,
} from '@react-native-material/core';
import {useSaveUserData} from '@hooks/login';

const ADList = [
  {title: '광고 1', point: 10},
  {title: '광고 2', point: 100},
  {title: '광고 3', point: 40},
];
export const ADPage = () => {
  const {saveUserInfo, userInfo} = useSaveUserData();
  const [Loading, setLoading] = useState('');

  const handleGetPoint = (title, point) => {
    const newUserInfo = userInfo.user;
    if (newUserInfo.point) {
      newUserInfo.point = (Number(newUserInfo.point) + point).toString();
    } else {
      newUserInfo.point = point;
    }
    setLoading(title);
    setTimeout(() => {
      setLoading('');
    }, point * 100);
    saveUserInfo(newUserInfo);
  };

  return (
    <ScrollView>
      <View>
        {ADList.map((value, index) => (
          <ListItem
            title={value.title}
            key={index}
            secondaryText={`${value.point}p (포인트별 로딩시간이 다릅니다.)`}
            trailing={
              <Button
                title="GET"
                style={{width: 55}}
                compact
                variant="text"
                loading={Loading === value.title ? true : false}
                disabled={Loading.length > 0 ? true : false}
                loadingIndicatorPosition="overlay"
                onPress={() => handleGetPoint(value.title, value.point)}
              />
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};
