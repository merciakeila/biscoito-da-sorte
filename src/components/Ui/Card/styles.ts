import styled, { css } from "styled-components/native";
import Colors from "app/constants/Colors";
import { IMargin } from "app/interfaces/styles";

interface IContainerArea extends IMargin {
  content: "start" | "center";
  theme?: "default" | "message";
}

export const ContainerArea = styled.View<IContainerArea>`
  ${(props) => css`
    align-items: ${props.content === "center" ? "center" : "flex-start"};
    background-color: ${props.theme === "default"
      ? Colors.base.white
      : Colors.primary.light};
    width: 100%;
    padding: 15px;
    border-radius: 2px;
    margin-bottom: ${props.mb || 0}px;
    margin-top: ${props.mt || 0}px;
    margin-left: ${props.ml || 0}px;
    margin-right: ${props.mr || 0}px;
    position: relative;
  `}
`;

export const TitleArea = styled.Text`
  font-size: 14px;
  color: ${Colors.text.normal};
`;
