import React, { useState } from "react";
import { Container, Title } from "./styles";

import { useTheme } from "styled-components";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  loading: boolean;
}
export function Button({ title, loading, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size={28 || "small"} color={theme.colors.white} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
