import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import { exo2 } from "../styles/typography";

type Props = NativeStackScreenProps<RootStackParamList, "ConfirmPassword">;

export default function ConfirmPasswordScreen({ navigation }: Props) {
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  // Function to handle form submission
  const handleConfirmPassword = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else {
      setErrorMessage("");
      // Proceed with form submission or further validation
      navigation.navigate("HomeScreen");
    }
  };
  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View className="mt-2 mb-3 mx-4 w-10">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" />
        </TouchableOpacity>
      </View>
      <View className="bg-white mx-10 h-screen">
        <View className="flex justify-center items-center my-10">
          <View className="flex w-full">
            <Text
              className="text-[23px] font-bold text-black"
              style={exo2.bold}
            >
              All your tenant
            </Text>
            <Text
              className="text-[23px] font-bold text-black"
              style={exo2.bold}
            >
              information in one place!
            </Text>
          </View>
          <View className="mt-3">
            <Text className="text-black/60 font-normal" style={exo2.regular}>
              Create your Asher account today and have all of your information
              at the click of a button!
            </Text>
          </View>
        </View>
        <View>
          <View className="flex items-center my-10">
            <View className="flex flex-row gap-2 border-b w-full w-ful pb-2 relative">
              <TextInput
                className="w-1/3"
                placeholder="Password"
                onChangeText={(newText) => setPassword(newText)}
                keyboardType="visible-password"
                textContentType="password"
                returnKeyType="done"
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry={showPassword ? true : false}
                style={[exo2.regular, { paddingVertical: 2 }]}
              />
              <View>
                <Image
                  source={require("../assets/icons/info-empty.png")}
                  className="h-4 w-4"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View className="flex items-center my-10">
            <View className="flex flex-row gap-2 border-b w-full pb-2">
              <TextInput
                className="w-full"
                placeholder="Confirm Password"
                onChangeText={(newText) => setConfirmPassword(newText)}
                keyboardType="visible-password"
                textContentType="password"
                returnKeyType="done"
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry={true}
                style={[exo2.regular, { paddingVertical: 2 }]}
              />
            </View>
          </View>
          <Text className="text-red-700" style={exo2.regular}>
            {errorMessage.length > 0 && errorMessage}
          </Text>
        </View>

        <View className="flex items-center my-10">
          <TouchableOpacity
            onPress={handleConfirmPassword}
            className="bg-[#B80238] w-full items-center flex p-3 rounded-lg"
          >
            <Text
              className="text-white uppercase font-medium"
              style={exo2.regular}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
