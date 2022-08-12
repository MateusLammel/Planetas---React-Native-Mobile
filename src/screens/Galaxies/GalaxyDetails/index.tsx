import React, { useEffect, useState } from "react";
import {
  AddPlanetText,
  ButtonsContainer,
  Container,
  FormContainer,
  Header,
  Info,
  InfoContent,
  Name,
  OnlyIconButton,
  Photo,
  PlanetImage,
  PlanetName,
  PlanetsSlider,
} from "./styles";
import Background from "../../../assets/back.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Galaxy, Planet } from "../../../@types/interfaces";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { planets } from "../../../data/planets";
import { useTheme } from "styled-components";

export function GalaxyDetails() {
  const route = useRoute();
  const [thisGalaxyPlanets, setThisGalaxyPlanets] = useState<Planet[]>([]);
  const navigation = useNavigation<any>();
  const galaxy = route.params as Galaxy;
  const theme = useTheme();

  useEffect(() => {
    setThisGalaxyPlanets(
      planets.filter((planet) => planet.galaxy_id === galaxy.id)
    );
  }, []);

  return (
    <Container source={Background}>
      <Header>
        <StatusBar barStyle="light-content" />
        <Photo source={{ uri: galaxy.photo }} />
      </Header>
      <Name>{galaxy.name}</Name>
      <FormContainer>
        <Info>
          Descrição:
          <InfoContent> {galaxy.description}</InfoContent>
        </Info>
        <Info>
          Tipo: <InfoContent> {galaxy.type}</InfoContent>
        </Info>

        <Info style={{ borderBottomWidth: 0 }}>
          Planetas:
          <InfoContent> {String(galaxy.numberOfPlanets)}</InfoContent>
        </Info>
      </FormContainer>

      <PlanetsSlider>
        {thisGalaxyPlanets.length > 0 && (
          <FlatList
            decelerationRate="normal"
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            data={thisGalaxyPlanets}
            keyExtractor={(key) => key.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("PlanetDetails", item)}
              >
                <PlanetImage
                  source={{ uri: item.photo }}
                  imageStyle={{ borderRadius: 7 }}
                >
                  <PlanetName>{item.name}</PlanetName>
                </PlanetImage>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </PlanetsSlider>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CreatePlanet", galaxy)}
      >
        <AddPlanetText>Adicionar planetas</AddPlanetText>
      </TouchableOpacity>

      <ButtonsContainer>
        <OnlyIconButton>
          <MaterialCommunityIcons
            name="delete-outline"
            size={34}
            color={theme.colors.gray_600}
          />
        </OnlyIconButton>

        <OnlyIconButton
          onPress={() => navigation.navigate("EditGalaxy", galaxy)}
        >
          <Feather name="edit" size={30} color={theme.colors.gray_600} />
        </OnlyIconButton>
      </ButtonsContainer>
    </Container>
  );
}
