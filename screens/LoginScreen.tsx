import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View className="mt-2 mb-3 mx-8">
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/back-icon.png")}
            className=""
          ></Image>
        </TouchableOpacity>
      </View>
      <View className="bg-white mx-10 h-screen">
        <View className="flex justify-center items-center my-10">
          <Text className="text-4xl font-bold text-black text-center">
            CREATE AN ACCOUNT
          </Text>
        </View>

        <View className="flex items-center mb-10">
          <View className="bg-[#B80238] p-3 rounded-lg w-full">
            <Text className="text-white text-base">
              You will be able to create an account using a registered email and
              valid Tenant ID
            </Text>
          </View>
        </View>

        <View className="flex items-center my-10">
          <View className="flex flex-row gap-2 border-b w-full pb-2">
            <Image source={require("../assets/icons/mail.png")} />
            <TextInput
              className="w-full"
              placeholder="Registered email address/Tenant ID"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View className="flex items-center my-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="bg-[#B80238] w-full items-center flex p-3 rounded-lg"
          >
            <Text className="text-white uppercase font-medium">Next</Text>
          </TouchableOpacity>
        </View>

        <View className="relative flex items-center">
          <View className="bg-white rounded-full h-12 w-12 absolute z-30 -top-2 mx-auto flex items-center">
            <Text className="text-black/50">OR</Text>
          </View>
          <View className="border-black/20 border w-full border-solid "></View>
        </View>

        <View className="flex items-center my-14">
          <View>
            <Text className="text-center font-medium">
              Already have an account
            </Text>
          </View>

          <View className="mt-7">
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              className="border-b border-solid pb-1 border-black"
            >
              <Text className="font-medium">Log in here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
