import { IMargin } from "app/interfaces/styles";
import React from "react";
import { FortuneCookie, OpenCookie } from "app/assets";
import { PressableArea, ImageCookie } from "./styles";

export interface ICookie extends IMargin {
  onPress?: () => void;
  type: "OPENED" | "CLOSED";
  disabled?: boolean;
}

const Cookie = ({ onPress, disabled, type = "CLOSED" }: ICookie) => {
  return (
    <PressableArea onPress={disabled ? () => {} : onPress}>
      {type === "OPENED" ? (
        <ImageCookie source={OpenCookie} resizeMode="contain" />
      ) : (
        <ImageCookie source={FortuneCookie} resizeMode="contain" />
      )}
    </PressableArea>
  );
};

export default Cookie;
