import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./button.styles";

type Props = RectButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
