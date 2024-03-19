import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Tab1Screen } from "../screens/tab/Tab1Screen";
import { Tab2Screen } from "../screens/tab/Tab2Screen";
import { Tab3Screen } from "../screens/tab/Tab3Screen";
import { FontAwesome } from "@expo/vector-icons";
import { colorsTheme } from "../theme/appTheme";

export type RootTabTopParams = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  Tab3Screen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabTopParams>();

export const MaterialTopNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1Screen"
      tabBarPosition="top"
      screenOptions={({ route }) => ({
        tabBarShowIcon: true, //ver el icono
        tabBarPressColor: colorsTheme.primary, //color cuando se presiona
        tabBarInactiveTintColor: colorsTheme.tertirary, //cuando el inocno este inactivo
        tabBarPressOpacity: 1, //la opacidad al presionarse
        //tabBarShowLabel: true, //Mostrar el label
        tabBarLabelStyle: {
          //el nombre del tab
          fontSize: 15,
          fontWeight: "bold",
        },
        tabBarItemStyle: {
          //liea encima del tab navigator
          borderTopColor: colorsTheme.primary,
          borderTopWidth: 3,
        },
        tabBarStyle: { backgroundColor: colorsTheme.background }, //background
        tabBarIndicatorStyle: {
          //estilos del indicador
          backgroundColor: colorsTheme.primary,
          height: 4,
          borderRadius: 10,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "group";
              break;
            case "Tab2Screen":
              iconName = "cloud";
              break;
            case "Tab3Screen":
              iconName = "apple";
              break;
          }
          return <FontAwesome name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: "Pantalla 1",
          //tabBarLabel: "I",
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{ title: "Pantalla 2" }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3Screen"
        options={{ title: "Pantalla 3" }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
