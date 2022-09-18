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
import { ActivityIndicator, StatusBar } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";
import { Routes } from "./src/routes";
import { SignIn } from "./src/srceen";
import { AuthProvider } from "./src/context";
import { useAuth } from "./src/hooks";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const { userStorageLoading } = useAuth();
  // const onLayoutRootView = useCallback(async () => {
  //   if (isFontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isFontsLoaded]);

  if (!isFontsLoaded || userStorageLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <View onLayout={onLayoutRootView}> */}
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* </View> */}
    </ThemeProvider>
  );
}
