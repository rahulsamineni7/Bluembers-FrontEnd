import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ShoppingBagIcon, UserIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, selectBasketItems, selectBasketItemsWithName, selectBasketTotal } from '../Slices/basketslice';

const Dishscreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const { params: { imgUrl, title, price } } = useRoute();

  const dispatch = useDispatch();

  const items = useSelector(state => selectBasketItemsWithName(state,title));

  const basketTotal = useSelector(selectBasketTotal);

  const addItemToBasket = () => {
  dispatch(addToBasket({ title, price, imgUrl }));
  
};
  return (
    <ScrollView className="">
      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="w-100 h-80"
        />

        <TouchableOpacity
          className="absolute top-14 p-2 bg-gray-100 rounded-full left-5"
          onPress={navigation.goBack}
          
        >
          <ArrowLeftIcon size={30} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={addItemToBasket}
         
          
          className="absolute bg-yellow-500 rounded-full w-32 h-10 right-1 bottom-2 flex items-center justify-center flex-row"
        >
          <TouchableOpacity className="" ><PlusIcon size={30} color="#00CCBB" /></TouchableOpacity>
          <Text className="">Add to cart </Text>
          
          
        </TouchableOpacity>

        <Text className="absolute left-1 bottom-3 ml-5 text-2xl text-white">₹{price}</Text>
      </View>

      <View className="px-4 pt-4 bg-white">
        <Text className="text-2xl font-bold">{title}</Text>
        <Text>With a wide selection of dishes, you can travel the world through your taste buds right here on our app. Bon appétit!</Text>
      </View>
    </ScrollView>
  );
}

export default Dishscreen;
