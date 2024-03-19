import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props{
    title: string;
    position: 'button_right'|'button_left';
    onPress: () =>void;
}

export const Fab = ( {title, position, onPress}:Props) => {

    const btnPosition = (position == 'button_right')
                        ? styles.fabLocationBR
                        : styles.fabLocationBL;

  return (
    <TouchableOpacity
        onPress={ onPress}
        style = {btnPosition}
    >
        <View style= {styles.fab}>
            <Text style= {styles.fabText}>
                {title}
            </Text>
        </View>

    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    fabLocationBR:{
        position: "absolute",
        bottom: 25,
        right: 25
    },
    fabLocationBL:{
        position: "absolute",
        bottom: 25, //abajo
        left: 25 //arriba
    },
    fab:{
        backgroundColor: "violet",
        width: 60, 
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
    },
    fabText:{
        color:"white",
        fontSize: 20, //tamaño
        fontWeight: "bold", //tipo
        alignSelf: "center"
    }
})

