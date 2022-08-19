import React, { useState } from "react";
import { Alert, Keyboard, StatusBar } from "react-native";
import { InputText } from "../../components/InputText";
import {
  Container,
  InputsContainer,
  ErrorMessage,
  Title,
  SubTitle,
  SignUpContainer,
  Header,
  PhotoContainer,
  Photo,
  CameraIcon,
  IconBack,
} from "./styles";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useTheme } from "styled-components";
import Background from "../../assets/back.png";
import { Button } from "../../components/Button";
import { ICreateUser } from "../../@types/interfaces";
import { IconButton } from "../../components/IconButton/Index";
import * as ImagePicker from "expo-image-picker";
import { createUser } from "../../services/User/createUser";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  async function handleSelectPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.2,
      base64: true,
    });

    if (result.cancelled) {
      return;
    }
    const { base64 } = result as ImagePicker.ImageInfo;
    if (base64) {
      formik.setFieldValue("photoBase64", base64, false);
    }
  }

  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail brigatório"),
    name: string()
      .required("Nome obrigatório")
      .min(8, "No minímo 8 caracteres"),
    password: string()
      .min(8, "No minímo 8 caracteres")
      .required("Senha brigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      photoBase64: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: ICreateUser) => {
      createUser(values)
        .then((response) => {
          navigation.navigate("Home");
        })
        .catch((err) => Alert.alert("Ocorreu um erro ao tentar criar a sua conta"));
    },
  });

  function handleSubmit() {
    Keyboard.dismiss();
    formik.handleSubmit();
  }

  return (
    <Container source={Background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Title>Pronto para explorar o espaço?</Title>
        <SubTitle>
          Faça seu cadastro e tenha acessos à diversas galáxias e planetas
        </SubTitle>
      </Header>
      <SignUpContainer>
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
        <InputsContainer>
          <InputText
            placeholderTextColor={theme.colors.gray_300}
            name="email"
            iconName="mail"
            placeholder="E-mail"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
          />
          {Boolean(formik.errors.email) && formik.touched.email && (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          )}
          <InputText
            placeholderTextColor={theme.colors.gray_300}
            name="Name"
            iconName="edit-3"
            placeholder="Nome do usuário"
            onChangeText={formik.handleChange("name")}
            value={formik.values.name}
          />
          {Boolean(formik.errors.name) && formik.touched.name && (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          )}
          <InputText
            name="password"
            iconName="lock"
            placeholder="Senha"
            placeholderTextColor={theme.colors.gray_300}
            onChangeText={formik.handleChange("password")}
            value={formik.values.password}
          />
          {Boolean(formik.errors.password) && formik.touched.password && (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          )}
        </InputsContainer>

        <Button
          title="CADASTRAR"
          onPress={handleSubmit}
          loading={loading}
          backgroundColor={theme.colors.main_green}
        />
      </SignUpContainer>
    </Container>
  );
}
