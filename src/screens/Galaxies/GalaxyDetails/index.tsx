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
  Alert,
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
import { deleteGalaxy } from "../../../services/Galaxies/deleteGalaxy";

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

  function handleDeleteGalaxy(id) {
    deleteGalaxy(id)
      .then(() => {
        Alert.alert("Galáxia excluída com sucesso");
        navigation.navigate("Home");
      })
      .catch((err) => Alert.alert(err));
  }

  console.log(thisGalaxyPlanets);
  return (
    <Container source={Background}>
      <Header>
        <StatusBar barStyle="light-content" />
        <Photo
          source={{
            uri: "data:image/jpeg;base64," + galaxy.photoBase64,
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
                    uri: "data:image/jpg;base64," + item.photoBase64,
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
            onPress={() => handleDeleteGalaxy(galaxy.id)}
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
