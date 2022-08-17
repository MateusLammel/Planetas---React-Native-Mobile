import React, { useState } from "react";
import { Alert, FlatList, StatusBar, View } from "react-native";

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
import { Separator } from "../../../Home/styles";
import { createPlanet } from "../../../../services/Planets/createPlanet";

export function CreatePlanet() {
  const navigate = useNavigation<any>();
  const theme = useTheme();
  const route = useRoute();
  const { id } = route.params as Galaxy;

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
      durationDay: "",
      surfaceArea: "",
      sunDistance: "",
      gravity: "",
      galaxy_id: id,
      isActive: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Number(values.surfaceArea);
      Number(values.sunDistance, values.gravity, values.durationDay);
      createPlanet(values)
        .then(() => {
          navigate.navigate("Home");
        })
        .catch((err) => console.log(err));
      navigate.navigate("Home");
    },
  });

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Cadastrar um novo planeta</Title>
      </Header>
      <FormContainer
        style={{
          marginVertical: 20,
        }}
        s
      >
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
          name="size"
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
