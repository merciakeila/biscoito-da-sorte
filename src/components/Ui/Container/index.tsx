import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ContainerArea } from "./styles";
import Colors from "app/constants/Colors";

export interface IContainer {
  content?: "start" | "center";
  children: React.ReactNode;
}

const Container = ({ content = "start", children }: IContainer) => {
  // return <ContainerArea content={content}>{children}</ContainerArea>;
  return (
    <LinearGradient
      colors={[Colors.background.light, Colors.background.dark]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0.1, y: 0.9 }}
      style={{
        flex: 1,
        justifyContent: content === "center" ? content : "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default Container;
