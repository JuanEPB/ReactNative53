import React from "react";
import { View, Text } from "react-native";

const mostrar = (): void => console.log("hola");
mostrar();

const mostrarII = (): void => {
  console.log("funcion 2");
};
mostrarII();

const saludo = (nombre: string): void => {
  console.log(`Hola ${nombre}`);
};

saludo("Juan");

const user_info = (nombre: string, apellido: string, edad?: number): void => {
  console.log(`User: ${nombre} ${apellido}`, edad ? edad : "");
};
user_info("juan", "piña");

const cartaPostres = (postre: string, ...frutas: string[]): void => {
  console.log(`${postre} ${frutas}`);
};
cartaPostres("Pie de manzana", "manzana");
cartaPostres("Pie de frutas", "naranja", "uva");

export const Funciones = () => {
  return (
    <View>
      <Text>Funciones</Text>
    </View>
  );
};
