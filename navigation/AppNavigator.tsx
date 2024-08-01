import * as React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import ConfirmPasswordScreen from "../screens/ConfirmPasswordScreen";
import RecommendationScreen from "../screens/RecommendationScreen";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CustomScreen() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center h-screen flex-col">
      <Text>Custom Screen</Text>
    </SafeAreaView>
  );
}
function ChatScreen() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center h-screen flex-col">
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
}

// Main screens for authorized users
export function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { paddingTop: 5 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#B80238",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {/* Home screen  */}
      <Tab.Screen
        name="Home"
        component={RecommendationScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              style={{
                borderBottomColor: focused ? "#B80238" : "transparent",
                borderBottomWidth: 1.5,
                paddingBottom: 5,
              }}
            >
              <Icon name="home" color={focused ? "#B80238" : "#2c2c2c"} />
            </View>
          ),
        }}
      />
      {/* Custom screen  */}
      <Tab.Screen
        name="Custom"
        component={CustomScreen}
        options={{
          title: "Custom",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              style={{
                borderBottomColor: focused ? "#B80238" : "transparent",
                borderBottomWidth: 1.5,
                paddingBottom: 5,
              }}
            >
              <Icon name="hardware" color={focused ? "#B80238" : "#2c2c2c"} />
            </View>
          ),
        }}
      />

      {/* Chat screen  */}
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "Chat",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              style={{
                borderBottomColor: focused ? "#B80238" : "transparent",
                borderBottomWidth: 1.5,
                paddingBottom: 5,
              }}
            >
              <Icon
                type="ionicon"
                name="chatbubble-ellipses-outline"
                color={focused ? "#B80238" : "#2c2c2c"}
              />
            </View>
          ),
        }}
      />

      {/* Recommendations screen  */}
      <Tab.Screen
        name="Recommendations"
        component={RecommendationScreen}
        options={{
          title: "Recommendations",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              style={{
                borderBottomColor: focused ? "#B80238" : "transparent",
                borderBottomWidth: 1.5,
                paddingBottom: 5,
              }}
            >
              <Icon
                name="user"
                type="antdesign"
                color={focused ? "#B80238" : "#2c2c2c"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth  */}

        <Stack.Screen
          options={{ animation: "none" }}
          name="CreateAccount"
          component={CreateAccountScreen}
        />
        <Stack.Screen
          name="ConfirmPassword"
          component={ConfirmPasswordScreen}
          options={{ animation: "none" }}
        />

        {/* Main  */}
        <Stack.Screen
          options={{ animation: "none" }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
