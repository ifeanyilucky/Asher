import { Platform, StyleSheet } from "react-native";

export const exo2 = StyleSheet.create({
  regular: {
    fontFamily: Platform.select({
      android: "Exo2_400Regular",
      ios: "Exo2-Regular",
    }),
  },
  bold: {
    fontFamily: Platform.select({
      android: "Exo2_700Bold",
      ios: "Exo2-Bold",
    }),
  },
});
