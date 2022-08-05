import React, { useState } from "react";
import { Image, Keyboard } from "react-native";

import {
  Container,
  ButtonsContainer,
  Title,
  Header,
  SubTitle,
  AnimationContainer,
} from "./styles";
import LottieView from "lottie-react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Background from "../../assets/estrelas.png";

export function FirstScreen() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Container source={Background} >
      <Header>
        <Title>Embarcar na aventura</Title>
        <SubTitle>Crie e customize galáxias e planetas inteiros!</SubTitle>
      </Header>
      <AnimationContainer>
        <LottieView
          autoPlay
          loop={false}
          source={require("../../assets/planetFirstScreen.json")}
          style={{
            width: 220,
            height: 220,
          }}
          resizeMode="contain"
        />
      </AnimationContainer>
      <ButtonsContainer>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate("Login")}
          backgroundColor={theme.colors.main_green}
        />

        <Button
          title="CADASTRAR"
          onPress={() => navigation.navigate("SignUp")}
          backgroundColor={theme.colors.text_white}
          color={theme.colors.dark_green}
        />
      </ButtonsContainer>
    </Container>
  );
}
