import { IMargin } from "app/interfaces/styles";
import React from "react";
import { PressableArea, TitleArea } from "./styles";

export interface IContainer extends IMargin {
  children: React.ReactNode;
  onPress: () => void;
  secondary?: boolean;
  bold?: boolean;
  height?: number;
  textSize?: number;
  danger?: boolean;
  warning?: boolean;
  disabled?: boolean;
  background?: string;
  color?: string;
}

const Button = ({
  children,
  onPress,
  secondary,
  mb,
  mt,
  ml,
  mr,
  bold,
  height = 50,
  textSize = 14,
  danger = false,
  warning = false,
  disabled = false,
  background,
  color,
}: IContainer) => {
  return (
    <PressableArea
      onPress={!disabled ? onPress : () => {}}
      secondary={secondary}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      height={height}
      danger={danger}
      warning={warning}
      disabled={disabled}
      background={background}
    >
      <TitleArea
        secondary={secondary}
        bold={bold}
        textSize={textSize}
        disabled={disabled}
        color={color}
      >
        {children}
      </TitleArea>
    </PressableArea>
  );
};

export default Button;
