import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View className="mt-2 mb-3 mx-8">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/back-icon.png")}
            className=""
          ></Image>
        </TouchableOpacity>
      </View>
      <View className="bg-white mx-10 h-screen">
        <View className="flex justify-center items-center my-10">
          <View>
            <Text className="text-2xl font-bold text-black">
              All your tenant information in one place!
            </Text>
          </View>
          <View className="mt-2">
            <Text className="text-black/60 font-normal">
              Create your Asher account today and have all of your information
              at the click of a button!
            </Text>
          </View>
        </View>
        <View>
          <View className="flex items-center my-10">
            <View className="flex flex-row gap-2 border-b w-full pb-2">
              <TextInput
                className="w-full"
                placeholder="Password"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View className="flex items-center my-10">
            <View className="flex flex-row gap-2 border-b w-full pb-2">
              <TextInput
                className="w-full"
                placeholder="Confirm Password"
                keyboardType="email-address"
              />
            </View>
          </View>
        </View>

        <View className="flex items-center my-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-[#B80238] w-full items-center flex p-3 rounded-lg"
          >
            <Text className="text-white uppercase font-medium">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
