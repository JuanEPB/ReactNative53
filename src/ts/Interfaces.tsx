import React from 'react';
import { View , Text} from 'react-native';

interface Persona {
    nombre: string;
    edad:number;

}

let user1:Persona = {
    nombre: "juan",
    edad:27
}

const detalle = (usuario:Persona):void=>{
    console.log(usuario);
}

detalle(user1);

interface user{
    username: string;
    avatar: string;
    email: string;
    location?: string;
}

const detalle_user  =(usuario:user)=>{
    console.log(`User detail: ${usuario.username} ${usuario.email} ${usuario.avatar}`, (usuario.location) ? usuario.location: '');
}

let mariano:user ={
    username: "mariano",
    avatar: "mariano.png",
    email: "mariano@gmail.com"
}

let joseluis:user = {
    username: "Jose Luis",
    avatar: "Sherlyn.png",
    email: "citlali@gmai.com",
    location: "lerma"
}

detalle_user(joseluis);

detalle_user(mariano);

interface Empleado{
        readonly claveTrabajador: string;
        readonly nombre:string;
        readonly apellido: string;
    }

let luis:Empleado ={
    claveTrabajador: "SDJ23-1",
    nombre: "luis",
    apellido: "lopez"
}

console.log(luis);

export const Interfaces = () => {
  return (
    <View>
        <Text>
            interfaces
        </Text>
    </View>
  );
}
