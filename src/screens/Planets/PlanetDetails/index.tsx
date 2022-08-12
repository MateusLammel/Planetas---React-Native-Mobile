import React from "react";
import {
  ButtonsContainer,
  Container,
  Header,
  Info,
  InfoContainer,
  InfoContent,
  Name,
  OnlyIconButton,
  Photo,
} from "./styles";
import Background from "../../../assets/back.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Planet } from "../../../@types/interfaces";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../../global/theme";

export function PlanetDetails() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const planet = route.params as Planet;

  return (
    <Container source={Background}>
      <Header>
        <StatusBar barStyle="light-content" />
        <Photo source={{ uri: planet.photo }} resizeMode="cover" />
      </Header>
      <Name>{planet.name}</Name>
      <InfoContainer>
        <Info>
          Descrição:
          <InfoContent> {planet.description}</InfoContent>
        </Info>
        <Info>
          Tamanho:
          <InfoContent> {String(planet.size)} Km2</InfoContent>
        </Info>
      </InfoContainer>

      <ButtonsContainer>
        <OnlyIconButton>
          <MaterialCommunityIcons
            name="delete-outline"
            size={34}
            color={theme.colors.gray_600}
          />
        </OnlyIconButton>

        <OnlyIconButton
          onPress={() => navigation.navigate("EditPlanet", planet)}
        >
          <Feather name="edit" size={30} color={theme.colors.gray_600} />
        </OnlyIconButton>
      </ButtonsContainer>
    </Container>
  );
}
