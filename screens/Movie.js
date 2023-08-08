import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const Movie = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await Font.loadAsync(Ionicons.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    init();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <View
      className={"flex-1 justify-center items-center"}
      onLayout={onLayoutRootView}
    >
      <Text>Movie</Text>
    </View>
  );
};

export default Movie;
