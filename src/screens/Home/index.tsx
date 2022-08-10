import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import {
  AddGalaxyButton,
  Container,
  GalaxiesList,
  Header,
  Separator,
  Title,
} from "./styles";
import Background from "../../assets/back.png";
import { InfoCard } from "../../components/InfoCard";
import { StatusBar, TouchableOpacity } from "react-native";
import { galaxies } from "../../data/galaxies";
import { useTheme } from "styled-components";

export function Home() {
  const navigation = useNavigation<any>();
  const theme = useTheme();

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Explore suas galáxias!</Title>
        <AddGalaxyButton onPress={() => navigation.navigate("CreateGalaxy")}>
          <Ionicons name="add" size={34} color={theme.colors.gray_300} />
        </AddGalaxyButton>
      </Header>
      <GalaxiesList
        data={galaxies}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("GalaxyDetails", item)}
          >
            <InfoCard photo={item.photo} name={item.name} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
