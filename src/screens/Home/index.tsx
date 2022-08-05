import React from "react";
import {
  Container,
  Header,
  Menu,
  MenuButton,
  MenuButtonText,
  SubTitle,
  Title,
} from "./styles";
import { useTheme } from "styled-components";
import Background from "../../assets/back.png";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function Home() {
  const theme = useTheme();

  return (
    <Container source={Background}>
      <Header>
        <Title>Explore o espaço!</Title>
        <SubTitle>Navegue pelas suas galáxias</SubTitle>

        <Menu>
          <MenuButton>
            <MenuButtonText>Galáxias</MenuButtonText>
            <FontAwesome
              name="connectdevelop"
              size={40}
              color={theme.colors.gray_300}
            />
          </MenuButton>
          <MenuButton>
            <MenuButtonText>Planetas</MenuButtonText>
            <Ionicons name="planet" size={40} color={theme.colors.gray_300} />
          </MenuButton>
        </Menu>
      </Header>
    </Container>
  );
}
