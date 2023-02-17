import styled, { css } from "styled-components/native";
import Colors from "app/constants/Colors";
import { IContainer } from ".";

export const ContainerArea = styled.View<IContainer>`
  ${(props) => css`
    flex: 1;
    justify-content: ${props.content === "start" ? "flex-start" : "center"};
    align-items: center;
    background-color: ${Colors.background.dark};
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

// export const BottomTabFix = styled.View`
//   width: 100%;
//   height: 80px;
//   background-color: ${Colors.background.dark};
//   bottom: 0;
// `;
