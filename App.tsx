import * as React from "react";
import { View, Text, Image } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import {
  Exo2_400Regular,
  Exo2_700Bold,
  useFonts,
} from "@expo-google-fonts/exo-2";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    Exo2_400Regular,
    Exo2_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppNavigator />;
}

export default App;
