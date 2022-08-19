import React from "react";
import {
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  border-radius: 12px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const InfoContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 16px;
  padding: 10px 0;
`;

export const Name = styled.Text`
  margin: 0 16px;
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Photo = styled.Image`
  width: 100%;
  height: 380px;
`;

export const Info = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  padding: 15px 0;
  text-align: justify;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.gray_400};
`;

export const InfoContent = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  width: 100%;
  line-height: 28px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px 25px 15px;
`;

export const OnlyIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  width: 195px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main_green};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
