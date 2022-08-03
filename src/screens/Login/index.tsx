import React from "react";
import { View, Text } from "react-native";
import { Container, InputsContainer, Label } from "./styles";

export function Login() {
  return (
    <Container>
      <InputsContainer>
        <Label>E-mail</Label>
        <Label>Senha</Label>
      </InputsContainer>
    </Container>
  );
}
