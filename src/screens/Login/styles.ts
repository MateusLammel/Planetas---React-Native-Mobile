import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const InputsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.dark_gray};
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.light_gray};
`;
