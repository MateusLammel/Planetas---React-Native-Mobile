import React from "react";
import { StatusBar, TouchableHighlight, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  border-radius: 12px;
`;

export const Header = styled.View`
  margin-top: ${StatusBar.currentHeight + 10}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_white};
  margin: 10px 20px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gray_300};
  line-height: 32;
  margin-top: 15px;
`;
export const Photo = styled.Image`
  width: 100%;
  height: 280px;
`;

export const Infos = styled.View`
  margin: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.main_green};
  border-radius: 7px;
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const InfoResult = styled.Text`
  margin-top: 6px;
  text-align: center;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.dark_green};
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
  width: 180px;
  height: 65px;
  border-width: 1px;
  border-color: rgba(205, 41, 20, 1);
  background-color: rgba(240, 54, 30, 0.15);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const EditButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: 180px;
  height: 65px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_300};
  background-color: rgba(91, 91, 91, 0.2);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
