import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>ScreenOne</Text>
  </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>ScreenTwo</Text>
  </TouchableOpacity>
);

const ScreenThree = ({ navigation: { goBack } }) => (
  <TouchableOpacity onPress={() => goBack()}>
    <Text>ScreenThree</Text>
  </TouchableOpacity>
);

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne}></NativeStack.Screen>
      <NativeStack.Screen name="Two" component={ScreenTwo}></NativeStack.Screen>
      <NativeStack.Screen
        name="Three"
        component={ScreenThree}
      ></NativeStack.Screen>
    </NativeStack.Navigator>
  );
};

export default Stack;
