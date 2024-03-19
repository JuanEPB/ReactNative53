import React, {useContext} from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
import { BtnTouch } from "../../components/BtnTouch";
import { AuthContext } from "../../context/AuthContext";
import { appTheme } from "../../theme/appTheme";

interface Props extends StackScreenProps<RootStackParams, "PrimeraScreen"> {}

interface Alumno {
  id: number;
  nombre: string;
}

export const PrimeraScreen = ({ navigation }: Props) => {
  const { authState, singIn, logout, changeUserName, changeFavImage } = useContext(AuthContext);
  const alumno: Alumno = {
    id: 12,
    nombre: "andres",
  };

  return (
    <View
      style={styles.view}
      // style={{
      //   ...appTheme.globalContainer,
      //   ...appTheme.globalMargin,
      // }}
    >
      <Text style={styles.Text}>DSM-53</Text>
      <Image
        style={styles.Image}
        // style={{
        //   ...appTheme.avatar
        // }}
        source={require("../../../assets/foto.jpg")}
      />
      <Text style={styles.Text}>Juan Eduardo Piña Bibiano</Text>
      <Text style={styles.Text}>Fidel Rodrigo Lazcano Martinez</Text>
      <BtnTouch
      action={ () => navigation.navigate('SegundaScreen')}
      title="Pagina 2"
      background="blue"
      />
         
      <BtnTouch
        action={() =>
          {navigation.navigate("PersonaScreen", {
            id: 1,
            nombre: "joseluis",
          }),
          ( !authState.isLoggedIn)
          ? console.log('User no sing in')
          : changeUserName ("Jose Luis")
        }}
        title="ir a la pagina dos"
        background="black"
      />
      <BtnTouch
        action={() => navigation.navigate("PersonaScreen", { ...alumno })}
        title={`Detalle: ${alumno.nombre}`}
        background="blue"
      />
      <BtnTouch
        action={() =>
          navigation.navigate("PersonaScreen", {
            id: alumno.id,
            nombre: alumno.nombre,
          })
        }
        title={`Detalle: ${alumno.nombre}`}
        background="pink"
      />  

      {/*Context*/}
      {
        (! authState.isLoggedIn )
        ? <BtnTouch title="Login" action={ singIn } background="gray" />
        : <BtnTouch title="logout" action={ logout } background="gray"/>
      }

      {/* <TouchableOpacity onPress={() => navigation.navigate("SegundaScreen")}>
        <View>
          <Text>Ir a la pagina 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PersonaScreen", {
            id: 1,
            nombre: "joseluis",
          })
        }
      >
        <View>
          <Text>Detalles</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PersonaScreen", { ...alumno })}
      >
        <View>
          <Text>Detalles de {alumno.nombre}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PersonaScreen", {
            id: alumno.id,
            nombre: alumno.nombre,
          })
        }
      >
        <View>
          <Text>Detalles de {alumno.nombre}</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 100,
    backgroundColor: "#585F67",
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  Image: {
 
    alignSelf: "center",
    width: 200,
    height: 200,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 50,
  },
});
