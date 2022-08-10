import React from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Galaxy } from "../../@types/interfaces";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
`;

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_white};
`;
export const AddGalaxyButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  height: 55px;
  width: 55px;
  background-color: ${({ theme }) => theme.colors.dark_green};
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gray_300};
  line-height: 32;
  margin-top: 15px;
`;

export const GalaxiesList = styled(
  FlatList as new () => FlatList<Galaxy>
).attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 0;
`;

export const Separator = styled.View`
  height: 20px;
`;
