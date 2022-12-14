import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useTheme } from "styled-components";
import * as ImagePicker from "expo-image-picker";
import {
  Container,
  ButtonsContainer,
  Title,
  Header,
  Select,
  FormContainer,
  PhotoContainer,
  Photo,
  ErrorMessage,
  IconBack,
  CameraIcon,
} from "./styles";

import { Button } from "../../../components/Button";
import Background from "../../../assets/estrelas.png";
import { InputText } from "../../../components/InputText";
import { IconButton } from "../../../components/IconButton/Index";
import { galaxies } from "../../../data/galaxies";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Galaxy, ICreateGalaxy } from "../../../@types/interfaces";
import { createGalaxy } from "../../../services/Galaxies/createGalaxy";

const types = ["Elíptica", "Espiral", "Irregular"];

export function CreateEditGalaxy() {
  const [loading, setLoading] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const navigate = useNavigation<any>();
  const theme = useTheme();
  const route = useRoute();
  const galaxy = route.params as Galaxy;
  useEffect(() => {
    if (route.name.includes("EditGalaxy")) {
      setEditPage(true);
    }
  }, []);

  function handleSelectType(value) {
    formik.setFieldValue("type", value, false);
  }

  async function handleSelectPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.2,
      base64: true,
    });
    console.log(result);

    if (result.cancelled) {
      return;
    }
    const { base64 } = result as ImagePicker.ImageInfo;
    if (base64) {
      formik.setFieldValue("photoBase64", base64, false);
    }
  }

  function handleSubmit() {
    if (!formik.values.photoBase64) {
      Alert.alert("Escolha uma imagem para a galáxia");
      return;
    }
    formik.handleSubmit();
  }

  const validationSchema = object({
    name: string().required("Nome obrigatório"),
    description: string().required("Descrição é obrigatória"),
    size: string().required("Tamanho obrigatório"),
  });

  const formikInitialValues =
    editPage && galaxy.name
      ? {
          name: galaxy.name,
          description: galaxy.description,
          type: galaxy.type,
          size: String(galaxy.size),
          color: galaxy.color,
          photoBase64: galaxy.photoBase64,
          id: galaxy.id,
          created_at: galaxy.created_at,
          updated_at: galaxy.updated_at,
        }
      : {
          name: "",
          description: "",
          type: "Elíptica",
          size: "",
          color: "red",
          photoBase64: "",
        };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formikInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values: ICreateGalaxy) => {
      setLoading(true);
      createGalaxy(values)
        .then(() => {
          navigate.navigate("Home");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>
          {editPage ? "Editar a galáxia" : "Cadastrar uma nova galáxia"}
        </Title>
      </Header>

      <FormContainer>
        <PhotoContainer>
          {!!formik.values.photoBase64 ? (
            <>
              <Photo
                source={{
                  uri: "data:image/jpeg;base64," + formik.values.photoBase64,
                }}
              />
              <IconBack onPress={handleSelectPhoto}>
                <CameraIcon
                  size={28}
                  color={theme.colors.gray_500}
                  name="device-camera"
                />
              </IconBack>
            </>
          ) : (
            <IconButton
              onPress={handleSelectPhoto}
              iconColor={theme.colors.gray_300}
              iconName="device-camera"
              title="Escolha a imagem"
              backgroundColor={"transparent"}
              fontSize={20}
              iconSize={30}
            />
          )}
        </PhotoContainer>
        <InputText
          iconName="edit-3"
          name="name"
          placeholder="Nome"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("name")}
          value={formik.values.name}
          defaultValue={formik.values.name}
        />
        {Boolean(formik.errors.name) && formik.touched.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
        <InputText
          multiline
          numberOfLines={3}
          iconName="edit-3"
          name="description"
          placeholder="Descrição"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("description")}
          value={formik.values.description}
          defaultValue={formik.values.description}
        />
        {Boolean(formik.errors.description) && formik.touched.description && (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        )}
        <InputText
          iconName="maximize-2"
          name="size"
          placeholder="Tamanho em Km2"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("size")}
          value={String(formik.values.size)}
          defaultValue={String(formik.values.size)}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.size) && formik.touched.size && (
          <ErrorMessage>{formik.errors.size}</ErrorMessage>
        )}
        <Select>
          {types.map((type) => (
            <IconButton
              onPress={() => handleSelectType(type)}
              iconColor={
                formik.values.type === type
                  ? theme.colors.dark_green
                  : theme.colors.gray_400
              }
              iconName="dot-fill"
              title={type}
              backgroundColor={"transparent"}
            />
          ))}
        </Select>
      </FormContainer>
      <ButtonsContainer>
        <Button
          title="CANCELAR"
          backgroundColor={theme.colors.text_white}
          color={theme.colors.dark_green}
        />

        <Button
          title="SALVAR"
          backgroundColor={theme.colors.dark_green}
          onPress={handleSubmit}
        />
      </ButtonsContainer>
    </Container>
  );
}
