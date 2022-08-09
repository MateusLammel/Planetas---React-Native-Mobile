import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 24px;
  justify-content: space-between;
`;

export const Header = styled.View`

  padding: ${StatusBar.currentHeight + 20}px 24px 0 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_white};
`;

export const FormContainer = styled.View``;

export const PhotoContainer = styled.View`
  width: 100%;
  height: 275px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

export const Select = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 15px 20px;
`;

export const Option = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_white};
  margin-left: 7px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  height: 130px;
`;
