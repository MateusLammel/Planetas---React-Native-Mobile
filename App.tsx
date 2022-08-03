import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Login } from "./src/screens/Login";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <Login />
    </View>
  );
}
