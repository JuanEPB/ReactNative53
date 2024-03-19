import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PrimeraScreen } from "../screens/screen/PrimeraScreen";
import { SegundaScreen } from "../screens/screen/SegundaScreen";
import { TerceraScreen } from "../screens/screen/TerceraScreen";
import { PersonaScreen } from "../screens/screen/PersonaScreen";

export type RootStackParams = {
  PrimeraScreen: undefined;
  SegundaScreen: undefined;
  TerceraScreen: undefined;
  PersonaScreen: { id: number; nombre: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PrimeraScreen"
      screenOptions={{
        headerShown: false, //ocultar el nombre del stack
        headerStyle: {
          elevation: 0,
          // shadowColor: "transparent",
        },
        cardStyle: {
          backgroundColor: "gray",
        },
      }}
    >
      <Stack.Screen
        name="PrimeraScreen"
        component={PrimeraScreen}
        options={{
          title: "Página 1",
        }}
      />
      <Stack.Screen
        name="SegundaScreen"
        component={SegundaScreen}
        options={{
          title: "Página 2",
        }}
      />
      <Stack.Screen
        name="TerceraScreen"
        component={TerceraScreen}
        options={{
          title: "Página 3",
        }}
      />
      <Stack.Screen
        name="PersonaScreen"
        component={PersonaScreen}
        options={{
          title: "Detalles del usuario",
        }}
      />
    </Stack.Navigator>
  );
};
