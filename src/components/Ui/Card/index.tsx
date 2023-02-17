import { IMargin } from "app/interfaces/styles";
import React from "react";
import { ContainerArea, TitleArea } from "./styles";

export interface ICard extends IMargin {
  children: React.ReactNode;
  content?: "start" | "center";
  theme?: "default" | "message";
}

const Card = ({
  children,
  theme = "default",
  content = "center",
  mb,
  mt,
  ml,
  mr,
}: ICard) => {
  return (
    <ContainerArea
      content={content}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      theme={theme}
    >
      {children}
    </ContainerArea>
  );
};

export default Card;
