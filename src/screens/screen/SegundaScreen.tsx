import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BtnTouch } from "../../components/BtnTouch";

export const SegundaScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.view}>
        <Image
          style={style.Image}
          source={require("../../../assets/videojuego.jpeg")}
        />
        <Image
          style={style.Image}
          source={require("../../../assets/musica.jpg")}
        />
      </View>
      <View style={style.view}>
        <Text style={style.Text}>
          Me gusta jugar videojuegos porque es interesante, ademas me sirve para
          poder distraerme del estres
        </Text>
        <Text style={style.Text}>
          Me gusta escuchar musica porque disfruto las letras de cada cancion
        </Text>
        <BtnTouch
        action={()=> navigator.navigate ('TerceraScreen')}
        title="ir a pagina 3"
        background="gray"
        />
        
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 3,
    borderWidth: 5,
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  Image: {
    alignItems: "center",
    left: 130,
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 30,
  },
});
