import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Tabs } from "./navigation/Tabs";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
