import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BCategoryCard = ({ imgUrl, title,price }) => {

    const navigation= useNavigation();

    return (
    <SafeAreaView className ="flex-col ">
               
<View>

<TouchableOpacity className="bg-white mr-3" onPress={()=>{
 navigation.navigate('Dish',{
     imgUrl,
     title,
     price
    
    });

}}>
            
            <Image
                source={{uri: imgUrl}}
                className="h-20 w-40  "
                />
            
        
        <View><Text className=" text-lg ">{title}</Text></View>
        
        
        </TouchableOpacity>
</View>

            
        </SafeAreaView>
    )
}

export default BCategoryCard