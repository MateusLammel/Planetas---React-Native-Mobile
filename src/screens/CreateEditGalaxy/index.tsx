import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import {
  Container,
  ButtonsContainer,
  Title,
  Header,
  Option,
  OptionText,
  Select,
  FormContainer,
  PhotoContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Background from "../../assets/estrelas.png";
import { Octicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { InputText } from "../../components/InputText";
import { Types } from "../../@types/interfaces";
import { IconButton } from "../../components/IconButton/Index";

const types = ["Elíptica", "Espiral", "Irregular"];

export function CreateEditGalaxy() {
  const [loading, setLoading] = useState(false);
  const [typeSelected, setTypeSelected] = useState<Types>("" as Types);
  const theme = useTheme();

  function handleSelectType(value: Types) {
    setTypeSelected(value);
  }
  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
  }
  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Cadastrar uma nova galáxia</Title>
      </Header>

      <FormContainer>
        <PhotoContainer>
          <IconButton
            onPress={handleSelectAvatar}
            iconColor={theme.colors.gray_300}
            iconName="device-camera"
            title="Escolha a imagem"
            backgroundColor={"transparent"}
            fontSize={20}
            iconSize={30}
          />
        </PhotoContainer>
        <InputText
          iconName="edit-3"
          name="name"
          placeholder="Nome"
          placeholderTextColor={theme.colors.gray_300}
        />
        <Select>
          <IconButton
            onPress={() => handleSelectType("Espiral")}
            iconColor={
              typeSelected === "Espiral"
                ? theme.colors.dark_green
                : theme.colors.gray_400
            }
            iconName="dot-fill"
            title="Espiral"
            backgroundColor={"transparent"}
          />
          <IconButton
            onPress={() => handleSelectType("Elíptica")}
            iconColor={
              typeSelected === "Elíptica"
                ? theme.colors.dark_green
                : theme.colors.gray_400
            }
            iconName="dot-fill"
            title="Elíptica"
            backgroundColor={"transparent"}
          />
          <IconButton
            onPress={() => handleSelectType("Irregular")}
            iconColor={
              typeSelected === "Irregular"
                ? theme.colors.dark_green
                : theme.colors.gray_400
            }
            iconName="dot-fill"
            title="Irregular"
            backgroundColor={"transparent"}
          />
        </Select>
      </FormContainer>
      <ButtonsContainer>
        <Button
          title="CANCELAR"
          backgroundColor={theme.colors.text_white}
          color={theme.colors.dark_green}
        />

        <Button title="SALVAR" backgroundColor={theme.colors.dark_green} />
      </ButtonsContainer>
    </Container>
  );
}
