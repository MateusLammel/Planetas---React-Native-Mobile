import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Background from "../../assets/estrelas.png";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding-bottom: 30px;
`;

export const Header = styled.View`
  height: 300px;
  width: 100%;
  padding: ${StatusBar.currentHeight + 20}px 24px 0 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.white};
  line-height: 32px;
  margin-top: 20px;
`;

export const AnimationContainer = styled.View`
  height: 280px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  padding: 0 24px;
  justify-content: space-between;
  height: 150px;
`;
