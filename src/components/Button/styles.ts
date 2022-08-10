import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  border-radius: 5px;
  height: 60px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
