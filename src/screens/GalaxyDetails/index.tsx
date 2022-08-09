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
  Name,
  NameContainer,
  NameTitle,
  Photo,
  PlanetImage,
  PlanetName,
  PlanetsSlider,

} from "./styles";
import Background from "../../assets/back.png";
import { useRoute } from "@react-navigation/native";
import { Galaxy } from "../../@types/interfaces";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { FlatList, StatusBar, Text, View } from "react-native";
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
        <StatusBar barStyle="light-content" />
        <Photo source={galaxy.photo} />
      </Header>

      <NameContainer>
     
        <Name>{galaxy.name}</Name>
      </NameContainer>
      <Infos>
        <InfoContainer>
          <InfoTitle>Tipo</InfoTitle>
          <InfoResult>{galaxy.type}</InfoResult>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Planetas</InfoTitle>
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
            color={theme.colors.gray_600}
          />
        </DeleteButton>

        <EditButton opacity>
          <Feather name="edit" size={30} color={theme.colors.gray_600} />
        </EditButton>
      </ButtonsContainer>
    </Container>
  );
}
