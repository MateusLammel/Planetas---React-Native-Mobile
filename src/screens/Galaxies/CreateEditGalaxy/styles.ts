import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
export const Container = styled.ImageBackground`
  flex: 1;
  padding: 30px 24px;
  justify-content: space-between;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_white};
`;

export const FormContainer = styled.View`
  justify-content: space-between;
  height: 530px;
`;

export const PhotoContainer = styled.View`
  width: 100%;
  height: 240px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const IconBack = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.colors.text_white};
  padding: 12px;
  border-radius: 40px;
  position: absolute;
  right: 30px;
  bottom: -5px;
`;
export const CameraIcon = styled(Octicons)``;
export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const Select = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
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
  width: 100%;
  justify-content: space-between;
  height: 130px;
`;
export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.warning};
`;
