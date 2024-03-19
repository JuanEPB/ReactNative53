import React, { ReactNode } from "react";
// import { TiposDatos } from "./src/ts/TiposDatos";
// import { Funciones } from "./src/ts/Funciones";
// import { Interfaces } from "./src/ts/Interfaces";
// import { ContadorSimpleScreen } from "./src/screens/ContadorSimpleScreen";
// import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { ComponenteBase } from "./src/screens/ComponenteBase";
// import { BasesIStyle } from "./src/styles/BasesIStyle";
// import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
// import { DimensionesScreen } from "./src/screens/DimensionesScreen";
// import { PositionScreen } from "./src/screens/PositionScreen";
// import { FlexScreen } from "./src/screens/FlexScreen";
// import { PrimeraScreen } from "./src/screens/screen/PrimeraScreen";
// import { SegundaScreen } from "./src/screens/screen/SegundaScreen";
// import { TerceraScreen } from "./src/screens/TerceraScreen";
// import { TerceraScreen } from "./src/screens/screen/TerceraScreen";

import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
// import { MenuLateralBasico } from "./src/navigator/MenuLateralBasico";
// import { StackNavigator } from "./src/navigator/StackNavigator";
// import { CountReducerScreen } from "./src/screens/CounterReducerScreen";
// import { HooksScreen } from "./src/screens/HooksScreen";
// import { UseReducerScreen } from "./src/screens/UseReducerScreen";
// import { UseEffectScreen } from "./src/screens/UseEffectScreen";
// import { StackNavigator } from "./src/navigator/StackNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { FormularioScreen } from "./src/screens/formulario/FormularioScreen";

// function suma(param1: number, param2: number) {
//   return param1 + param2;
// }
// console.log(suma(1, 2));                 
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
    // <FormularioScreen/>
  );
};
const AppState = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
