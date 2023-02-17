import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { setCustomText } from "react-native-global-props";
import Colors from "app/constants/Colors";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "dancing-script-regular": require("../assets/fonts/DancingScript-Regular.ttf"),
          "dm-sans-regular": require("../assets/fonts/DMSans-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
        setCustomText({
          style: {
            fontFamily: "montserrat-bold",
            color: Colors.text.normal,
          },
        });
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
