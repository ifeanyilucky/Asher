import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View className="mt-2 mb-3 mx-8 flex gap-2 flex-row items-center px-5">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/back-icon.png")}
            className=""
          ></Image>
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-medium">Recommendations</Text>
        </View>
      </View>
      <View
        style={styles.shadow}
        className="h-full flex flex-row justify-between mt-3 shadow-2xl px-5"
      >
        <View>
          <TouchableOpacity className="flex flex-row items-center">
            <View>
              <Image
                source={require("../assets/icons/sort.png")}
                className="w-4 h-4"
              />
            </View>
            <Text> Sort</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className="flex flex-row items-center">
            <View>
              <Image
                source={require("../assets/icons/heart.png")}
                className="w-4 h-4"
              />
            </View>
            <Text> Favourites</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className="flex flex-row items-center">
            <View>
              <Image
                source={require("../assets/icons/filter.png")}
                className="w-4 h-4"
              />
            </View>
            <Text> Filter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className="flex flex-row items-center">
            <View>
              <Image
                source={require("../assets/icons/mail.png")}
                className="w-4 h-4"
              />
            </View>
            <Text> Invites</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white flex h-full"></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
