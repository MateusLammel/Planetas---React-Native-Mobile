import React from "react";
import { StatusBar, TouchableHighlight, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  border-radius: 12px;
`;

export const Header = styled.View``;
export const NameContainer = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 7px;
  align-items: center;
  margin: 20px 20px 0 20px;
`;
export const NameTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Name = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Photo = styled.Image`
  width: 100%;
  height: 280px;
`;

export const Infos = styled.View`
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 7px;
  width: 190px;
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;

export const InfoResult = styled.Text`
  margin-top: 2px;
  text-align: center;
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PlanetsSlider = styled.View`
  flex-direction: row;
  margin: 0 20px;
  border-radius: 7px;
`;

export const PlanetsTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.dark_green};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PlanetImage = styled.ImageBackground`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  align-items: center;
  justify-content: flex-end;
`;
export const PlanetName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 7px;
`;

export const ButtonsContainer = styled.View`
  margin: 50px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: 190px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const EditButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: 190px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.main_green};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
