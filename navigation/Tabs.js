import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import Movie from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tab = createBottomTabNavigator();

export function Tabs() {
  const colorScheme = useColorScheme();
  // https://www.nativewind.dev/core-concepts/dark-mode
  const isDark = colorScheme === "dark";

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { marginBottom: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Movie}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
