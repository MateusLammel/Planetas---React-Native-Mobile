import React from "react";
import { Container, Footer, Name } from "./styles";
interface Galaxies {
  photo: string;
  name: string;
}

export function InfoCard({ photo, name }: Galaxies) {
  return (
    <Container
      source={{ uri: "data:image/jpg;base64," + photo }}
      imageStyle={{ borderRadius: 10 }}
    >
      <Footer colors={["transparent", "black"]} start={[0, 0.1]}>
        <Name>{name}</Name>
      </Footer>
    </Container>
  );
}
