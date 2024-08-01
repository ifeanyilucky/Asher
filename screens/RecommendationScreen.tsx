import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { propertyType, properties } from "../utils/constants";
import { RootStackParamList } from "../navigation/types";
import { Badge, Icon } from "react-native-elements";
import { exo2 } from "../styles/typography";

type Props = NativeStackScreenProps<RootStackParamList, "Recommendations">;

export default function RecommendationScreen({ navigation }: Props) {
  return (
    <>
      <SafeAreaView style={styles.shadow} className="bg-white flex ">
        <View>
          <View className="mt-2 mb-3 mx-2 flex gap-2 flex-row items-center px-3">
            <TouchableOpacity
              className="p-2"
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back-ios" />
            </TouchableOpacity>
            <View>
              <Text className="text-xl font-medium " style={exo2.bold}>
                Recommendations
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between mt-3 shadow-2xl px-5 py-4">
            <View>
              <TouchableOpacity className="flex flex-row items-center">
                <View>
                  <Icon name={"swap-vert"} />
                </View>
                <Text className="text-xs" style={exo2.regular}>
                  {" "}
                  Sort
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity className="flex flex-row items-center">
                <View>
                  <Icon name="favorite" />
                </View>
                <Text className="text-xs" style={exo2.regular}>
                  {" "}
                  Favourites
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity className="flex flex-row items-center">
                <View>
                  <Icon name={"filter-alt"} />
                </View>
                <Text className="text-xs" style={exo2.regular}>
                  {" "}
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity className="flex flex-row items-center">
                <View>
                  <Icon name="markunread" />
                </View>
                <Badge
                  status="success"
                  value="2"
                  badgeStyle={{
                    backgroundColor: "#B80238",
                  }}
                  containerStyle={{
                    position: "absolute",
                    left: 20,
                    top: -10,
                    width: 5,
                  }}
                  textStyle={{ fontSize: 7 }}
                />
                <Text className="text-xs" style={exo2.regular}>
                  {" "}
                  Invites
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView className="flex-1 flex">
        <ScrollView className="bg-gray-100 flex flex-col gap-y-3 h-full p-5 pb-10">
          {properties.map((item: propertyType, index: number) => (
            <View
              key={item.id}
              style={styles.shadow}
              className="bg-white w-full h-fit rounded-xl overflow-hidden"
            >
              <View>
                <Image
                  className="w-full h-52 object-cover"
                  source={item.image}
                  resizeMode="cover"
                />
              </View>
              <View className="px-5 bg-[#B80238] py-4 flex gap-y-1 flex-col">
                <Text className="text-white text-xl font-medium">
                  £{item?.price_pcm && item.price_pcm.toLocaleString()} pcm
                </Text>
                <Text className="text-white font-medium">
                  £{item?.price_pw && item.price_pw.toLocaleString()} pw
                </Text>
              </View>
              <View className="px-5 py-4 flex flex-col gap-y-3">
                <Text className="font-bold" style={exo2.bold}>
                  {item.title}
                </Text>
                <Text className="font-bold" style={exo2.bold}>
                  {item.address}
                </Text>
                <Text className="text-sm text-black/50" style={exo2.regular}>
                  Added on {item.created_on}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#030303",
    shadowOffset: {
      width: 1,
      height: 8,
    },
    paddingBottom: 10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 3,
    backgroundColor: "white",
    width: "100%",
    marginVertical: 0,
  },
});
