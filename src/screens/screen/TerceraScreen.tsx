import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
import { BtnTouch } from "../../components/BtnTouch";

interface Props extends StackScreenProps<RootStackParams, "TerceraScreen"> {}

export const TerceraScreen = ({ navigation }: Props) => {
  return (
    <View style={style.view}>
      <Image
        style={style.Imagen}
        source={require("../../../assets/Areli.jpg")}
      />
      <Text style={style.Text}>
        
          Me gusta porque me siento seguro con ella, es una buena persona con la
          cual comparto muchos gustos y nos llevamos muy bien, ademas es muy
          linda. Es alguien muy interesante, cuando paso tiempo con ella siento
          que solo fueran minutos aunque pasan horas. Jamas habia conocido a alguien
          como ella, sencillamente me enamore de ella
        
      </Text>

      <BtnTouch
        action={()=> navigation.pop()}
        title="Regresar Pantalla"
        background="yellow"
        />
     
      <BtnTouch
        action={() => navigation.popToTop()}
        title="Regresar Inicio"
        background="green"
        />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
    padding: 100,
    backgroundColor: "#D99D8F",
  },
  Text: {
    textAlign: "justify",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  Imagen: {
    alignItems: "center",
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
});
