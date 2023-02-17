import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Container, Card, Cookie, Button } from "app/components";
import { Title, Subtitle, Menssage } from "./styles";
import Colors from "app/constants/Colors";
import randomCookie from "app/services/requests/randomCookie";
import { randomIntFromInterval } from "app/utils/helper";

const HomeScreen = () => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  const fortuneCookie = () => {
    setOpened(false);
  };

  const openCookie = async () => {
    try {
      setLoading(true);
      const result = await randomCookie.getCookie(
        randomIntFromInterval(1, 128)
      );
      setMessage(result.advice);
      setOpened(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container content="center">
      <Card>
        <Title>Qual é a sua sorte de hoje?</Title>
        {opened ? (
          <>
            <Card theme="message" mt={20}>
              <Menssage>{message}</Menssage>
            </Card>
            <Cookie type="OPENED" disabled={opened} />
            <Button
              background={Colors.primary.dark}
              onPress={fortuneCookie}
              mt={15}
              color={Colors.base.white}
            >
              Abrir outro biscoito
            </Button>
          </>
        ) : (
          <>
            <Subtitle>Abra o biscoito e descubra!</Subtitle>
            {loading && <ActivityIndicator size="large" />}
            <Cookie type="CLOSED" onPress={openCookie} />
          </>
        )}
      </Card>
    </Container>
  );
};

export default HomeScreen;
