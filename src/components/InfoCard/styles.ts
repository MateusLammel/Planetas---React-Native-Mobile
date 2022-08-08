import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.ImageBackground`
  width: 100%;
  height: 200px;

  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
`;

export const Footer = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  padding-bottom: 12px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.dark_green};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;


