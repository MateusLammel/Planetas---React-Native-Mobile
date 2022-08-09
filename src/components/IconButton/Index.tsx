import React, { useState } from "react";
import { Container, Title } from "./styles";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  ActivityIndicator,
  ColorValue,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  backgroundColor?: ColorValue;
  color?: ColorValue;
  iconName: React.ComponentProps<typeof Octicons>["name"];
  iconColor: string;
  fontSize?: number;
  iconSize?: number;
}
export function IconButton({
  title,
  iconName,
  backgroundColor,
  color,
  iconColor,
  fontSize,
  iconSize,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      style={{ backgroundColor: backgroundColor || theme.colors.main_green }}
    >
      <Octicons name={iconName} size={iconSize || 24} color={iconColor} />
      <Title
        style={{
          color: color || theme.colors.text_white,
          fontSize: fontSize || 15,
        }}
      >
        {title}
      </Title>
    </Container>
  );
}
