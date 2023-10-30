import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BCategoryCard from "./BCategoryCard";
import { foodItems } from './products'; // Import the data from products.js
import { useDispatch } from 'react-redux/lib/exports';
import { useGetProductsQuery } from '../Slices/apiSlice';
import { ActivityIndicator } from 'react-native';


const BCategories = () => {

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetProductsQuery();

 


  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {foodItems.map((item, index) => (
        <BCategoryCard
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
          price={item.price}
        />
      ))}
    </ScrollView>
  );
};

export default BCategories;
