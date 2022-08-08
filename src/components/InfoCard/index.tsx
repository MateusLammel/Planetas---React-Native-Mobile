import React, { useState } from "react";
import { Container, Footer, Name } from "./styles";

import { useTheme } from "styled-components";
import { Text } from "react-native";

interface Galaxies {
  photo: string;
  name: string;
}
export function InfoCard({ photo, name }: Galaxies) {
  const theme = useTheme();

  return (
    <Container source={photo} imageStyle={{ borderRadius: 10 }}>
      <Footer colors={["transparent", "black"]} start={[0, 0.1]}>
        <Name>{name}</Name>
      </Footer>
    </Container>
  );
}
