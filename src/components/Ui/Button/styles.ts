import styled, { css } from "styled-components/native";
import Colors from "app/constants/Colors";
import { IMargin } from "app/interfaces/styles";

interface IPressableArea extends IMargin {
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

export const PressableArea = styled.Pressable<IPressableArea>`
  ${(props) => css`
    justify-content: center;
    align-items: center;
    background-color: ${props.secondary
      ? "transparent"
      : props.danger
      ? Colors.system.danger
      : props.warning
      ? Colors.system.warning
      : props.disabled
      ? Colors.background.dark
      : props.background
      ? props.background
      : Colors.primary.normal};
    width: 100%;
    height: ${props.height}px;
    border-radius: 6px;
    margin-bottom: ${props.mb || 0}px;
    margin-top: ${props.mt || 0}px;
    margin-left: ${props.ml || 0}px;
    margin-right: ${props.mr || 0}px;
  `}
`;

export const TitleArea = styled.Text<IPressableArea>`
  ${(props) => css`
    font-size: ${props.textSize}px;
    color: ${props.secondary
      ? Colors.primary.normal
      : props.disabled
      ? Colors.text.normal
      : props.color
      ? props.color
      : Colors.text.normal};
    text-decoration: ${props.secondary ? "underline" : "none"};
    font-family: dm-sans-regular;
    margin-top: 3px;
  `}
`;
