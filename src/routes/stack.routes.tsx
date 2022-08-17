import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { GalaxyDetails } from "../screens/Galaxies/GalaxyDetails";
import { CreateEditGalaxy } from "../screens/Galaxies/CreateEditGalaxy";
import { PlanetDetails } from "../screens/Planets/PlanetDetails";
import { CreatePlanet } from "../screens/Planets/CreateEditPlanet/CreatePlanet";
import { EditPlanet } from "../screens/Planets/CreateEditPlanet/EditPlanet";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
      <Screen name="GalaxyDetails" component={GalaxyDetails} />
      <Screen name="CreateGalaxy" component={CreateEditGalaxy} />
      <Screen name="EditGalaxy" component={CreateEditGalaxy} />
      <Screen name="CreatePlanet" component={CreatePlanet} />
      <Screen name="EditPlanet" component={EditPlanet} />
      <Screen name="PlanetDetails" component={PlanetDetails} />
    </Navigator>
  );
}
