import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Background from "../../assets/back.png";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.black};
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;
`;
export const LogoRocket = styled.Image``;

export const LoginContainer = styled.View`
  height: 280px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.black};
  padding: 16px;
`;

export const InputsContainer = styled.View`
  width: 100%;
  height: 125px;
  justify-content: space-between;

`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: 5px;
`;
