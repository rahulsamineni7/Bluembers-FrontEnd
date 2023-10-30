import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'

const OCategoryCard = ({ imgUrl, title }) => {
    return (
    <SafeAreaView className ="flex-col ">
               
<View>

<TouchableOpacity className="bg-white mr-3" >
            
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

export default OCategoryCard