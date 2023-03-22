import React from 'react';
import {ScrollView} from 'react-native';
import {Surface, HStack, ListItem, Button} from '@react-native-material/core';
import {useBuyProduct} from '@hooks/buy';
import {useSetUser} from '@hooks/setUser';
import {Alert} from 'react-native';

export const Market = () => {
  const {buyProduct, marketInfo} = useBuyProduct();
  const {userInfo, setUserData} = useSetUser();
  const handleBuyButton = value => {
    const {title, point} = value;
    if (Number(point) > Number(userInfo.user.point)) {
      Alert.alert('Warning', 'point 부족함', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      const removeBuyProduct = marketInfo.productList.filter(
        product => product.title !== title,
      );

      const buyProductItem = marketInfo.productList.filter(
        product => product.title === title,
      );

      const saveBuyProductInUserInfo = userInfo.user.purchaseList
        ? userInfo.user.purchaseList.concat(buyProductItem)
        : buyProductItem;

      const saveUserInfoWithNewProduct = Object.assign(
        {},
        userInfo.user,
        {
          purchaseList: saveBuyProductInUserInfo,
        },
        {point: (Number(userInfo.user.point) - Number(point)).toString()},
      );

      setUserData(saveUserInfoWithNewProduct);
      buyProduct(removeBuyProduct);
    }
  };
  return (
    <ScrollView>
      <HStack center spacing={4} wrap={'wrap'} gap={10}>
        {marketInfo.productList.map((value, index) => (
          <Surface
            elevation={6}
            style={{width: 160, height: 70, marginTop: 80}}
            key={index}>
            <ListItem title={value.title} secondaryText={`${value.point}p`} />
            <Button
              title="구매해기"
              style={{marginTop: 20}}
              onPress={() => handleBuyButton(value)}></Button>
          </Surface>
        ))}
      </HStack>
    </ScrollView>
  );
};
