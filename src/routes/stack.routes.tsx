import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { GalaxyDetails } from "../screens/GalaxyDetails";
import { CreateEditGalaxy } from "../screens/CreateEditGalaxy";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="CreateGalaxy" component={CreateEditGalaxy} />
      <Screen name="EditGalaxy" component={CreateEditGalaxy} />
      <Screen name="Home" component={Home} />
      <Screen name="GalaxyDetails" component={GalaxyDetails} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
