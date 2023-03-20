import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();
export const setUserData = user => {
  storage.set('User', JSON.stringify(user));
};
export const getUserData = () => {
  const value = storage.getString('User');

  return value;
};
export const deleteUserData = () => {
  storage.delete('User');
};
