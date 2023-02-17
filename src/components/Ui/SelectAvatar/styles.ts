import Colors from "app/constants/Colors";
import styled, { css } from "styled-components/native";

interface IPressArea {
  active: boolean;
}

export const ContentArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ImageAvatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 60px;
`;

export const PressArea = styled.Pressable<IPressArea>`
  ${(props) => css`
    height: 68px;
    width: 68px;
    border-radius: 68px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: ${props.active
      ? Colors.primary.normal
      : Colors.background.dark};
  `}
`;
