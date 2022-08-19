import React, { useEffect, useState } from "react";
import { Alert, StatusBar, View } from "react-native";
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

import { Button } from "../../../../components/Button";
import Background from "../../../../assets/estrelas.png";
import { InputText } from "../../../../components/InputText";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IUpdatePlanet, Planet } from "../../../../@types/interfaces";
import { validationSchema } from "../validationSchema";

export function EditPlanet() {
  const navigate = useNavigation<any>();
  const theme = useTheme();
  const route = useRoute();
  const {
    description,
    durationDay,
    gravity,
    isActive,
    name,
    sunDistance,
    surfaceArea,
    id,
    photoBase64,
  } = route.params as IUpdatePlanet;

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
    formik.handleSubmit();
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: id && {
      name,
      description,
      surfaceArea: String(surfaceArea),
      gravity: String(gravity),
      sunDistance: String(sunDistance),
      durationDay: String(durationDay),
      id,
      isActive,
      photoBase64,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate.navigate("Home");
    },
  });

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Editar o planeta</Title>
      </Header>

      <FormContainer
        style={{
          marginVertical: 20,
        }}
      >
        <PhotoContainer>
          <Photo
            source={{
              uri: "data:image/jpeg;base64," + formik.values.photoBase64,
            }}
            resizeMode="contain"
          />
          <IconBack onPress={handleSelectPhoto}>
            <CameraIcon
              size={28}
              color={theme.colors.gray_500}
              name="device-camera"
            />
          </IconBack>
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
        <View style={{ height: 15 }} />
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
        <View style={{ height: 15 }} />
        <InputText
          iconName="maximize-2"
          name="surfaceArea"
          placeholder="Tamanho em Km2"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("surfaceArea")}
          value={formik.values.surfaceArea}
          defaultValue={formik.values.surfaceArea}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.surfaceArea) && formik.touched.surfaceArea && (
          <ErrorMessage>{formik.errors.surfaceArea}</ErrorMessage>
        )}
        <View style={{ height: 15 }} />
        <InputText
          iconName="maximize-2"
          name="sunDistance"
          placeholder="Distância do Sol"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("sunDistance")}
          value={formik.values.sunDistance}
          defaultValue={formik.values.sunDistance}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.sunDistance) && formik.touched.sunDistance && (
          <ErrorMessage>{formik.errors.sunDistance}</ErrorMessage>
        )}
        <View style={{ height: 15 }} />
        <InputText
          iconName="maximize-2"
          name="gravity"
          placeholder="Força da gravidade"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("gravity")}
          value={formik.values.gravity}
          defaultValue={formik.values.gravity}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.gravity) && formik.touched.gravity && (
          <ErrorMessage>{formik.errors.gravity}</ErrorMessage>
        )}
        <View style={{ height: 15 }} />
        <InputText
          iconName="maximize-2"
          name="durationDay"
          placeholder="Duração do dia"
          placeholderTextColor={theme.colors.gray_300}
          onChangeText={formik.handleChange("durationDay")}
          value={formik.values.durationDay}
          defaultValue={formik.values.durationDay}
          keyboardType="numeric"
        />
        {Boolean(formik.errors.durationDay) && formik.touched.durationDay && (
          <ErrorMessage>{formik.errors.durationDay}</ErrorMessage>
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
