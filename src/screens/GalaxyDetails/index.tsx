import React from "react";
import {
  ButtonsContainer,
  Container,
  DeleteButton,
  EditButton,
  FormContainer,
  Header,
  Info,
  InfoContent,
  Name,
  Photo,
  PlanetImage,
  PlanetName,
  PlanetsSlider,
} from "./styles";
import Background from "../../assets/back.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Galaxy } from "../../@types/interfaces";
import { FlatList, ScrollView, StatusBar, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../global/theme";
const planets = [
  {
    id: "1",
    name: "Marte",
    photo: require("../../assets/marte.png"),
  },
  {
    id: "2",
    name: "Terra",
    photo: require("../../assets/terra.png"),
  },
  {
    id: "3",
    name: "Venus",
    photo: require("../../assets/venus.png"),
  },
];

export function GalaxyDetails() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const galaxy = route.params as Galaxy;

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
        <Info>
          Planetas:
          <InfoContent> {String(galaxy.numberOfPlanets)}</InfoContent>
        </Info>
      </FormContainer>
      <PlanetsSlider>
        <FlatList
          decelerationRate="normal"
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          data={planets}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => (
            <PlanetImage source={item.photo} imageStyle={{ borderRadius: 7 }}>
              <PlanetName>{item.name}</PlanetName>
            </PlanetImage>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </PlanetsSlider>

      <ButtonsContainer>
        <DeleteButton>
          <MaterialCommunityIcons
            name="delete-outline"
            size={34}
            color={theme.colors.gray_600}
          />
        </DeleteButton>

        <EditButton onPress={() => navigation.navigate("EditGalaxy", galaxy)}>
          <Feather name="edit" size={30} color={theme.colors.gray_600} />
        </EditButton>
      </ButtonsContainer>
    </Container>
  );
}
