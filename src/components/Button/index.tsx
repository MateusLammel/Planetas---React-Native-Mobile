import React, { useState } from "react";
import { Container, Title } from "./styles";

import { useTheme } from "styled-components";
import {
  ActivityIndicator,
  ColorValue,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  backgroundColor?: ColorValue;
  color?: ColorValue;
}
export function Button({
  title,
  loading,
  backgroundColor,
  color,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      style={{ backgroundColor: backgroundColor || theme.colors.main_green }}
    >
      {loading ? (
        <ActivityIndicator size={28 || "small"} color={theme.colors.white} />
      ) : (
        <Title style={{color: color || theme.colors.text_white}}>{title}</Title>
      )}
    </Container>
  );
}
