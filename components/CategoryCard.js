import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({ imgUrl, title }) => {


    return (
        <SafeAreaView className ="flex-col items-center mt-5 relative">
               

            <TouchableOpacity >
            <View className=" ">

                <Image
                    source={{uri: imgUrl}}
                    className="h-20 w-20 rounded ml-2"
                    />
                <Text className="absolute bottom-1 left-6 text-white overflow-hidden">{title}</Text>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CategoryCard