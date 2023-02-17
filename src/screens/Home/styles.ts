import styled from "styled-components/native";
import Colors from "app/constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${Colors.text.normal};
  font-size: 18px;
  font-family: montserrat-bold;
  max-width: 180px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: ${Colors.text.normal};
  font-size: 13px;
  font-family: dm-sans-regular;
  margin-top: 10px;
`;

export const Menssage = styled.Text`
  text-align: center;
  color: ${Colors.text.normal};
  font-family: dancing-script-regular;
  font-size: 17px;
  width: 190px;
`;
