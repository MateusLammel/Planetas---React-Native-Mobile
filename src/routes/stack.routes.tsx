import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { GalaxyDetails } from "../screens/Galaxies/GalaxyDetails";
import { CreateEditGalaxy } from "../screens/Galaxies/CreateEditGalaxy";
import { PlanetDetails } from "../screens/Planets/PlanetDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="GalaxyDetails" component={GalaxyDetails} />
      <Screen name="CreateGalaxy" component={CreateEditGalaxy} />
      <Screen name="EditGalaxy" component={CreateEditGalaxy} />
      <Screen name="PlanetDetails" component={PlanetDetails} />
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
