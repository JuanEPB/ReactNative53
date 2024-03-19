import React from 'react';
import { View , Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View
    style={styles.container}
    >
        <View
            style={styles.box1}
        />
        <View
            style={styles.box2}
        />
        <View
            style={styles.box3}
        />
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"column", //la direccion de los elementos en el contenedor padre
        alignItems:'flex',  //alinea los items
        backgroundColor:"black",
        flex:1,
        // flexWrap:"wrap-reverse",
        justifyContent: "space-evenly" //el space around da un margen arriba y abajo, between da una separacion entre ellos
                                       //evenly busca que siempre tenga el mismo tamaño
    },
    box1:{
        backgroundColor: 'white',
        height: 100,
        width: 100,
        alignSelf:"flex-end" //permite que un item este alineado en una posisicion que se requiere, dependiendo de donde se ubique
    },
    box2:{
        backgroundColor: 'pink',

        height: 100,
        width: 100,
    },
    box3:{
        backgroundColor: 'blue',

        height: 100,
        width: 100,
    },

})