import React, {useState} from 'react';
import {View} from 'react-native';
import {Stack, TextInput, Button} from '@react-native-material/core';
import {useLogin} from '@hooks/login';
import {Alert} from 'react-native';

export const Login = () => {
  const [user, setUser] = useState({name: '', email: ''});
  const {login} = useLogin();

  const handleInputName = text => {
    setUser({...user, name: text});
  };
  const handleInputEmail = text => {
    setUser({...user, email: text});
  };

  const handleSaveUserData = () => {
    if (user.name.length === 0 || user.email.length === 0) {
      Alert.alert('Warning', '다 채워라잉', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      login(user);
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
      }}>
      <Stack spacing={2} style={{margin: 26}}>
        <TextInput
          label="Name"
          variant="outlined"
          color="pink"
          id="sdf"
          onChangeText={handleInputName}
          style={{margin: 20}}
        />
        <TextInput
          label="Email"
          variant="outlined"
          color="pink"
          onChangeText={handleInputEmail}
          style={{margin: 20}}
        />
        <Button
          title="Login"
          color="pink"
          style={{margin: 20}}
          onPress={handleSaveUserData}
        />
      </Stack>
    </View>
  );
};
