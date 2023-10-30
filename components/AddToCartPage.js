import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../Slices/basketslice';
import { TrashIcon,PlusCircleIcon } from 'react-native-heroicons/outline';
import { useCreateOrderMutation } from '../Slices/apiSlice';

const AddToCartPage = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  const[createOrder,{data,error,isLoading}] =useCreateOrderMutation();

  const onCreateOrder=() =>{
    createOrder({
      Total_items:items.length,
      Total_Amount:basketTotal
    })


  }

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.title] = results[item.title] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const removeItemFromBasket = (title) => {
    dispatch(removeFromBasket({ title }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView className="divide-y divide-gray-200 mt-14">
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <View key={key} className="flex-row space-x-4 ">
            <Text>{items.length} x</Text>
            <Image source={{ uri: items[0]?.imgUrl }} className="h-12 w-12 rounded-full" />
            <Text className="flex-1">{items[0]?.title}</Text>
            <TouchableOpacity onPress={() => removeItemFromBasket(items[0]?.title)} className="mr-3">
              <TrashIcon size={30} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        ))}
        <View className="flex items-center justify-center ">
          <TouchableOpacity onPress={onCreateOrder} className=" bg-yellow-500 rounded-5 w-40 h-10 items-center justify-center flex-row">
            <Text>Total: {basketTotal}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddToCartPage;
