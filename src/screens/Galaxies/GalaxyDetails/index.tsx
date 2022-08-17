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
import { getGalaxyById } from "../../../services/Galaxies/getGalaxyById";

export function GalaxyDetails() {
  const route = useRoute();
  const [thisGalaxyPlanets, setThisGalaxyPlanets] = useState<Planet[]>([]);
  const navigation = useNavigation<any>();
  const galaxy = route.params as Galaxy;
  const theme = useTheme();

  useEffect(() => {
    getGalaxyById(galaxy.id)
      .then((response: any) => {
        setThisGalaxyPlanets(response.data.Planet);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container source={Background}>
      <Header>
        <StatusBar barStyle="light-content" />
        <Photo
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
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
        <Info>
          Número de planetas:
          <InfoContent> {thisGalaxyPlanets.length}</InfoContent>
        </Info>
        <Info>
         Tamanho da galáxia:
          <InfoContent> {String(galaxy.size)} Km2</InfoContent>
        </Info>
      </FormContainer>

      <PlanetsSlider>
        {thisGalaxyPlanets.length > 0 && (
          <FlatList
            decelerationRate="normal"
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            data={thisGalaxyPlanets}
            keyExtractor={(key) => key.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("PlanetDetails", item)}
              >
                <PlanetImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbmV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                  }}
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
