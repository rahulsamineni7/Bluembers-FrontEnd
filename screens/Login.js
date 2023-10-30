import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInputComponent, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {


  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="">
      <View className=" flex items-center justify-center w-screen- h-screen space-y-11 ">
        <View className="">
          <Image
            source={require('../assets/IMG-20230907-WA0001.jpg')}

            className="h-14 w-14  bg-gray-300 p-10 rounded-full "
          />
        </View>
        <TouchableOpacity onPress={() => {

        }}>

          <View className=" bg-gray-50 border border-solid  rounded-full  flex-row items-center p-2  ">

            <View className="">
              <Image
                source={require('../assets/googlelogo.png')}

                className="h-5 w-5  bg-gray-300  rounded-full space "
              />
            </View>



            <Text> Countinue with Google</Text>

          </View>
        </TouchableOpacity>
        <View>

          <Text className="text-bold" >or</Text>



        </View>

        <View className="flex-row  items-center bg-gray-50   border border-solid  rounded pl-14 pr-14 h-7  flex-wrap">

          <TextInput placeholder='      Email        ' keyboardType='default' className="overflow-hidden" />

        </View>

        <View className=" flex-row  items-center bg-gray-50   border border-solid  rounded pl-14 pr-14 h-7  flex-wrap ">

          <TextInput placeholder='  Password   ' keyboardType='default' className="overflow-hidden" />

        </View>
        <TouchableOpacity><View className=" bg-black  w-36 h-6 rounded items-center justify-center">
          <Text className="text-white">Sign in</Text>

        </View></TouchableOpacity>

        <View>
          <TouchableOpacity>

            <Text className="text-blue-400">Reset password</Text>
          </TouchableOpacity>

        </View>

        <View>

          <View className="flex-row">

            <Text className="">No account? </Text>
            <TouchableOpacity>

              <Text className="text-blue-400">

                Create one

              </Text>

            </TouchableOpacity>


          </View>
        </View>

      </View>


    </SafeAreaView>

  )
}