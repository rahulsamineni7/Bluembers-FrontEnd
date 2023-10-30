import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInputComponent, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  ArrowRightIcon

} from 'react-native-heroicons/outline';
import Categories from "../components/Categories"
import BCategories from '../components/BCategories';
import OCategories from '../components/OCategories';
import { useSelector } from 'react-redux/lib/exports';
import { selectBasketItems } from '../Slices/basketslice';


const HomeScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-10 ml-1">
      {/* Header */}
      <View className="flex-row items-center">
        <View className="flex-1">
          <Image
            source={require('../assets/IMG-20230907-WA0001.jpg')}

            className="h-12 w-12  bg-gray-300 p-8 rounded-full "
          />
        </View>

        <View className="flex-row space-x-5 relative">
        <Text className="absolute left-8 top-2 text-xs text-red-500">{items.length}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Cart')}><ShoppingBagIcon size={30} color="#00CCBB"  /></TouchableOpacity>
          <TouchableOpacity ><BellIcon size={30} color="#00CCBB" /></TouchableOpacity>
          <TouchableOpacity className="mr-3"><UserIcon size={30} color="#00CCBB" /></TouchableOpacity>
          




        </View>
      </View>

      <View className="flex-row  items-center bg-gray-50 rounded-full p-2 mt-3 mr-3 ml-3 flex-wrap" >
        <MagnifyingGlassIcon color="#00CCBB" />
        <TextInput placeholder='Search for dishes' keyboardType='default' className="overflow-hidden" />
      </View>


      <Text className="font-bold text-lg">Categories</Text>
      <ScrollView className="mb-5 ">

        <Categories />
      </ScrollView>
      <View className="flex-row">
<View className="flex-1">

<Text className="font-bold text-lg">

Blue Embers
</Text>
<Text>
Get fresh and hot Westren food

</Text>
</View>
        
        <TouchableOpacity className="mr-3"><ArrowRightIcon size={30} color="#00CCBB" /></TouchableOpacity>

      </View>
      <ScrollView className="mb-5 ">

<BCategories />
</ScrollView>

<View className="flex-row">
<View className="flex-1">

<Text className="font-bold text-lg">

Blue Embers extention
</Text>
<Text>
Get fresh and hot continetal food

</Text>
</View>
        
        <TouchableOpacity className="mr-3"><ArrowRightIcon size={30} color="#00CCBB" /></TouchableOpacity>

      </View>

      
      <ScrollView className="mb-10 ">

<OCategories/>
</ScrollView>


    </SafeAreaView>
  );
};

export default HomeScreen;
