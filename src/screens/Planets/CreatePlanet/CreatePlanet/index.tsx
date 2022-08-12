import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";

import { useFormik } from "formik";
import { useTheme } from "styled-components";
import * as ImagePicker from "expo-image-picker";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  Container,
  ButtonsContainer,
  Title,
  Header,
  FormContainer,
  PhotoContainer,
  Photo,
  ErrorMessage,
  IconBack,
  CameraIcon,
} from "./styles";
import { Button } from "../../../../components/Button";
import Background from "../../../../assets/estrelas.png";
import { InputText } from "../../../../components/InputText";
import { IconButton } from "../../../../components/IconButton/Index";
import { Galaxy, Planet } from "../../../../@types/interfaces";
import { planets } from "../../../../data/planets";
import { validationSchema } from "../validationSchema";

export function CreatePlanet() {
  const navigate = useNavigation<any>();
  const theme = useTheme();
  const route = useRoute();
  const { name } = route.params as Galaxy;

  async function handleSelectPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }
    const { uri } = result as ImagePicker.ImageInfo;
    if (uri) {
      formik.setFieldValue("photo", uri, false);
    }
  }

  function handleSubmit() {
    if (!formik.values.photo) {
      Alert.alert("Escolha uma imagem");
    }
    formik.handleSubmit();
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: "",
      name: "",
      description: "",
      photo: "",
      size: "",
      galaxy_id: name,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.id === values.name;
      planets.push({ ...values, size: Number(values.size) });
      navigate.navigate("Home");
    },
  });

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Cadastrar um novo planeta</Title>
      </Header>
      <FormContainer>
        <PhotoContainer>
          {!!formik.values.photo ? (
            <>
              <Photo
                source={{
                  uri: formik.values.photo,
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
          iconName="globe"
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
          value={formik.values.size}
          defaultValue={formik.values.size}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.size) && formik.touched.size && (
          <ErrorMessage>{formik.errors.size}</ErrorMessage>
        )}
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
