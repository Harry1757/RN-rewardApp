import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();
export const setMarketData = product => {
  storage.set('Market', JSON.stringify(product));
};
export const getMarketData = () => {
  const value = storage.getString('Market');

  return value;
};
export const deleteMarketData = () => {
  storage.delete('Market');
};
