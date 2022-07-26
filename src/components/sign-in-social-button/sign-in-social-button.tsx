import React, { FC, SVGProps } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, ImageContainer, Title } from "./sign-in-social-button-styles";

type Props = RectButtonProps & {
  title: string;
  svg: FC<SVGProps<SVGSVGElement>>;
};

export default function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Title>{title}</Title>
    </Button>
  );
}
