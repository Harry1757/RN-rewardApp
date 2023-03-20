import React, {useState, useEffect} from 'react';
import {TextInput, View, Button, Text} from 'react-native';
import {useGetInput} from 'hooks/input';
import {MMKV} from 'react-native-mmkv';
import {justaction} from '@actions/input';
import {useDispatch, useSelector} from 'react-redux';

export const storage = new MMKV();
export const Input = () => {
  const [inputText, setInputText] = useState('');
  const {inputState, saveInput} = useGetInput();
  const dispatch = useDispatch();
  const handleInputChange = text => {
    setInputText(text);
    saveInput(text);
  };

  const handleSet = () => {
    storage.set('test', 's장!');
  };
  const handleGet = () => {
    const value = storage.getString('test');
    console.log(value);
  };
  const handleDelete = () => {
    storage.delete('test');
  };
  const actionTest = () => {
    dispatch(justaction());
  };

  return (
    <View>
      <Text>{inputText}</Text>
      <TextInput onChangeText={handleInputChange} />
      <Button title="set" onPress={handleSet} />
      <Button title="get" onPress={handleGet} />
      <Button title="delete" onPress={handleDelete} />
      <Button title="actionTest" onPress={actionTest} />
    </View>
  );
};
