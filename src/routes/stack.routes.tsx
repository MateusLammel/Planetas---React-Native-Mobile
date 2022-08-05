import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { FirstScreen } from "../screens/FirstScreen";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="FirstScreen"
    >
      <Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ gestureEnabled: false }}
      />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
