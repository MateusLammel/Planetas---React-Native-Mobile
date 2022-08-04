import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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

export function Login() {
  const theme = useTheme();
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
    },
  });

  function handleSubmit() {
    Keyboard.dismiss();
    formik.handleSubmit();
  }

  return (
    <Container>
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

        <Button title="ENTRAR" onPress={handleSubmit} loading={loading} />
      </LoginContainer>
    </Container>
  );
}
