import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Icon } from "react-native-elements";
import { exo2 } from "../styles/typography";

type Props = NativeStackScreenProps<RootStackParamList, "Recommendations">;

export default function CreateAccountScreen({ navigation }: Props) {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  // Function to handle form submission
  const handleSubmit = () => {
    if (!email) {
      // Check if email is empty
      setError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // Validate email format using regex
      setError("Email is invalid.");
    } else {
      // Navigate to the "ConfirmPassword" screen if email is valid
      navigation.navigate("ConfirmPassword");
    }
  };

  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View className="mt-2 mb-3 mx-3">
        <TouchableOpacity
          className="p-2 inline-block w-12"
          onPress={() => navigation.goBack()}
          testID="back-button"
        >
          <Icon name="arrow-back-ios" />
        </TouchableOpacity>
      </View>
      <View className="bg-white mx-10 h-screen">
        <View className="flex justify-center items-center my-10">
          <Text
            className="text-4xl font-bold text-black text-center"
            style={exo2.bold}
          >
            CREATE AN ACCOUNT
          </Text>
        </View>

        <View className="flex items-center mb-10">
          <View className="bg-[#B80238] p-3 rounded-lg w-full">
            <Text className="text-white text-base" style={exo2.regular}>
              You will be able to create an account using a registered email and
              valid Tenant ID
            </Text>
          </View>
        </View>

        <View className="flex my-10">
          <View className="flex flex-row gap-2 border-b w-full pb-2 mb-2">
            <Image
              source={require("../assets/icons/mail.png")}
              className="h-5 w-5"
              resizeMode="contain"
            />
            <TextInput
              className="w-full"
              placeholder="Registered email address/Tenant ID"
              keyboardType="email-address"
              onChangeText={(newText) => setEmail(newText)}
              returnKeyType="done"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoComplete="email"
              style={exo2.regular}
            />
          </View>
          {error.length > 0 && (
            <Text style={exo2.regular} className={`${error && "text-red-700"}`}>
              {error}
            </Text> // Display error message if there's an error
          )}
        </View>

        <View className="flex items-center my-10">
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-[#B80238] w-full items-center flex p-3 rounded-lg"
          >
            <Text
              style={exo2.regular}
              className="text-white uppercase font-medium"
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>

        <View className="relative flex items-center">
          <View className="bg-white rounded-full h-12 w-12 absolute z-30 -top-2 mx-auto flex items-center">
            <Text style={exo2.regular} className="text-black/50">
              OR
            </Text>
          </View>
          <View className="border-black/20 border w-full border-solid "></View>
        </View>

        <View className="flex items-center my-14">
          <View>
            <Text style={exo2.regular} className="text-center font-medium">
              Already have an account
            </Text>
          </View>

          <View className="mt-7">
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateAccount")} // Navigate to "CreateAccount" screen
              className="border-b border-solid pb-1 border-black"
            >
              <Text style={exo2.regular} className="font-medium">
                Log in here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
