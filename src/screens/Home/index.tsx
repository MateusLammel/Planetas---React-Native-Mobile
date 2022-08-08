import React from "react";
import {
  Container,
  GalaxiesList,
  Header,
  Separator,
  SubTitle,
  Title,
} from "./styles";
import { useTheme } from "styled-components";
import Background from "../../assets/back.png";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { InfoCard } from "../../components/InfoCard";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Galaxy } from "../../@types/interfaces";



const galaxies: Galaxy[] = [
  {
    id: 1,
    name: "Via Lactea",
    photo: require("../../assets/laceta.png"),
    type: "Espiral",
    numberOfPlanets: 3,
  },
  {
    id: 2,
    name: "Andrômeda",
    photo: require("../../assets/andromeda.png"),
    type: "Elíptica",
    numberOfPlanets: 1,
  },
  {
    id: 3,
    name: "asda",
    photo: require("../../assets/galaxy3.png"),
    type: "Espiral",
    numberOfPlanets: 7,
  },
  {
    id: 4,
    name: "4 galáxia",
    photo: require("../../assets/galaxy4.png"),
    type: "Irregular",
    numberOfPlanets: 2,
  },
];

export function Home() {
  const navigation = useNavigation<any>();

  return (
    <Container source={Background}>
      <Header>
        <Title>Explore suas galáxias!</Title>
        <SubTitle>
          Navegue pelas suas galáxias e acesse os seus planetas
        </SubTitle>
      </Header>

      <GalaxiesList
        data={galaxies}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Galaxy", item)}
          >
            <InfoCard photo={item.photo} name={item.name} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
