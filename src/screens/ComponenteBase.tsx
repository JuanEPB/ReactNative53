import React from "react";
import { View, Text } from "react-native";

interface Props{
  nombre:string
}
const NombreAlumno = ({nombre}:Props) => {
  return (
    <View>
      <Text>{nombre}</Text>
    </View>
  );
};

export const ComponenteBase = () => {
  const persona ={
      nombre:"Areli"
  }
  return (
    <View>
        <NombreAlumno 
          {...persona}
          />
          {'\n'}

          <NombreAlumno 
          nombre={persona.nombre} 
          />
          {'\n'}


          <NombreAlumno 
          nombre="Areli"
          />
          {'\n'}

    </View>
  );
};
