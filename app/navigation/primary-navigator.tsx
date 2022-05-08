import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  BootstrapScreen,
  HomeScreen,
  ListScreen,
} from "../screens"

import { PrimaryParamList } from "./types"

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={"home"}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="bootstrap" component={BootstrapScreen} />
      <Stack.Screen name="list" component={ListScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["home"]
