import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { FirstScreen } from "../screens/FirstScreen";
import { Home } from "../screens/Home";
import { GalaxyDetails } from "../screens/GalaxyDetails";
import { CreateEditGalaxy } from "../screens/CreateEditGalaxy";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
     
      <Screen
        name="CreateEditGalaxy"
        component={CreateEditGalaxy}

      />
      <Screen
        name="Galaxy"
        component={GalaxyDetails}
        options={{ gestureEnabled: false }}
      />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
