import React from "react";
import { View, Text } from "react-native";

const nombre: string = "Juan";
let edad: number | string = 19;

console.log(nombre, edad);

edad = "20";

let si: boolean = true;
let no: boolean = false;

console.log(si ? "verdadero" : "falso", no);

let arr_number: number[] = [1, 2, 3, 4, 5];
let arr_string: string[] = ["a", "b", "c"];

let collection: Array<number> = [1, 2, 3];
let collection_b: Array<string> = ["a", "b"];

console.log(arr_number, arr_string, collection, collection_b);

let tuple: [number, string, boolean] = [10, "Mariana", true];
console.log(tuple);

export const TiposDatos = () => {
  return (
    <View>
      <Text>Tipos de Datos</Text>
    </View>
  );
};
