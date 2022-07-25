import React, { useCallback } from "react";
import { ThemeProvider } from "styled-components";
// import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { ActivityIndicator } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (isFontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <View onLayout={onLayoutRootView}> */}
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      {/* </View> */}
    </ThemeProvider>
  );
}
