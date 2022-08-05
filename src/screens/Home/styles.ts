import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Background from "../../assets/back.png";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.black};
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

export const Menu = styled.View`
  flex-direction: row;
`;

export const MenuButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})``;

export const MenuButtonText = styled.Text``;
