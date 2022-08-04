import React, { useState } from "react";
import { View, Text, TextInputProps } from "react-native";
import { Container, IconContainer, Input } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
  name: string;
}

export function InputText({ iconName, value, name, ...rest }: Props) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled
              ? theme.colors.main_green
              : theme.colors.gray_300
          }
        />
      </IconContainer>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={() => setIsFilled(!!value)}
        name={name}
        {...rest}
      />
    </Container>
  );
}
