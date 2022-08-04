import React from "react";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
 
`;

export const IconContainer = styled.View<Props>`
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-right-width: 5px;
      border-color: ${({ theme }) => theme.colors.main_green};
    `}
`;

export const Input = styled(TextInput)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_white};
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  width: 100%;
  height: 100%;
`;
