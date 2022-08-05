import React, { useState } from "react";
import { Keyboard } from "react-native";
import { InputText } from "../../components/InputText";
import {
  Container,
  InputsContainer,
  ErrorMessage,
  Title,
  SubTitle,
  SignUpContainer,
  Header,
} from "./styles";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { useTheme } from "styled-components";
import Background from "../../assets/back.png";
import { Button } from "../../components/Button";

export function SignUp() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail brigatório"),
    password: string()
      .min(8, "No minímo 8 caracteres")
      .required("Senha brigatória"),
    confirmPassword: string()
      .required("Senha brigatória")
      .oneOf([ref("password"), null], "As senhas devem ser iguais"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
    <Container source={Background}>
      <Header>
        <Title>Pronto para explorar o espaço?</Title>
        <SubTitle>Faça seu cadastro e tenha acessos à diversas galáxias e planetas</SubTitle>
      </Header>
      <SignUpContainer>
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
          <InputText
            name="password"
            iconName="lock"
            placeholder="Senha"
            placeholderTextColor={theme.colors.gray_300}
            onChangeText={formik.handleChange("password")}
            value={formik.values.confirmPassword}
          />
          {Boolean(formik.errors.confirmPassword) &&
            formik.touched.confirmPassword && (
              <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
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
