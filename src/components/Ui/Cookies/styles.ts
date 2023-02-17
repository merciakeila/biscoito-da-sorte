import styled, { css } from "styled-components/native";
import { IMargin } from "app/interfaces/styles";

export const PressableArea = styled.Pressable<IMargin>`
  ${(props) => css`
    justify-content: center;
    align-items: center;
    margin-bottom: ${props.mb || 0}px;
    margin-top: ${props.mt || 0}px;
    margin-left: ${props.ml || 0}px;
    margin-right: ${props.mr || 0}px;
  `}
`;

export const ImageCookie = styled.Image`
  margin-top: 10px;
  width: 150px;
  height: 100px;
`;
