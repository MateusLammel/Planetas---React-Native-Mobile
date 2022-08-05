import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Background from "../../assets/back.png";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.black};
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export const Header = styled.View`
  margin-top: ${StatusBar.currentHeight + 50}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_white};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gray_300};
  line-height: 32;
  margin-top: 15px;
`;

export const SignUpContainer = styled.View`
  height: 380px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.black};
  padding: 24px 16px;
  margin-top: 50px;
`;

export const InputsContainer = styled.View`
  width: 100%;
  height: 205px;
  justify-content: space-between;
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: 5px;
`;
