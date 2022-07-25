import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import {
  Button,
  Contaienr,
  Icon,
  Title,
} from "./transaction-type-button.styles";

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

type Props = RectButtonProps & {
  type: "up" | "down";
  title: string;
  isActive: boolean;
};

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <Contaienr isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Contaienr>
  );
}
