import React, { useState } from "react";
import { Alert, Keyboard, StatusBar } from "react-native";
import { InputText } from "../../components/InputText";
import {
  Container,
  InputsContainer,
  LoginContainer,
  LogoContainer,
  LogoRocket,
  ErrorMessage,
} from "./styles";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useTheme } from "styled-components";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import Background from "../../assets/back.png";
import { useNavigation } from "@react-navigation/native";
import { authentiqueUser } from "../../services/User/authenticateUser";

export function Login() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail brigatório"),
    password: string()
      .min(8, "No minímo 8 caracteres")
      .required("Senha brigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      authentiqueUser(values)
        .then((response) => {
          navigation.navigate("Home");
        })
        .catch((err) => Alert.alert("Ocorreu um erro ao tentar efetuar login"));
    },
  });

  function handleSubmit() {
    Keyboard.dismiss();
    formik.handleSubmit();
  }

  return (
    <Container source={Background} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <LogoContainer>
        <LogoRocket source={Logo} resizeMode="center" />
      </LogoContainer>
      <LoginContainer>
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
          title="ENTRAR"
          onPress={handleSubmit}
          loading={loading}
          backgroundColor={theme.colors.main_green}
        />
      </LoginContainer>
    </Container>
  );
}
