import React from "react";
import {
  ButtonsContainer,
  Container,
  DeleteButton,
  EditButton,
  Header,
  InfoContainer,
  InfoResult,
  Infos,
  InfoTitle,
  Photo,
  PlanetImage,
  PlanetName,
  PlanetsSlider,
  Title,
} from "./styles";
import Background from "../../assets/back.png";
import { useRoute } from "@react-navigation/native";
import { Galaxy } from "../../@types/interfaces";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { FlatList, Text, View } from "react-native";
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
  const galaxy = route.params as Galaxy;

  function PlanetsCarousel() {
    const offset = useSharedValue(0);

    const carouselStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: 500 }],
      };
    });
  }

  return (
    <Container source={Background}>
      <Header>
        <Title>{galaxy.name}</Title>
        <Photo source={galaxy.photo} />
      </Header>

      <Infos>
        <InfoContainer>
          <InfoTitle>Tipo da galáxia</InfoTitle>
          <InfoResult>{galaxy.type}</InfoResult>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Número de planetas</InfoTitle>
          <InfoResult>{String(galaxy.numberOfPlanets)}</InfoResult>
        </InfoContainer>
      </Infos>

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
            color="rgba(205, 41, 20, 1)"
          />
        </DeleteButton>

        <EditButton opacity>
          <Feather name="edit" size={30} color={theme.colors.gray_300} />
        </EditButton>
      </ButtonsContainer>
    </Container>
  );
}
