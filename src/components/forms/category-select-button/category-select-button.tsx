import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Category, Icon } from "./category-select-button.styles";

type Props = RectButtonProps & {
  title: string;
};

export function CategorySelectButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
