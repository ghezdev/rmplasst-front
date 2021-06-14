import React, { useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";

import {
  HomeView,
  ListMoldMaintView,
  FormMoldMaintView,
  MoldMaintView,
} from "_views";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen
            name="ListMoldMaintView"
            component={ListMoldMaintView}
          />
          <Stack.Screen
            name="FormMoldMaintView"
            component={FormMoldMaintView}
          />
          <Stack.Screen name="MoldMaintView" component={MoldMaintView} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
