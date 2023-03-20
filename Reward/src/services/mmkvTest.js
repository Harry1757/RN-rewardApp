import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();
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
