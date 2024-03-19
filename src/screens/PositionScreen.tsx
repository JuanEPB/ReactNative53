import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View
    style={styles.container}
    >
        <View
            style={styles.cajaVerde}
            />
        <View
            style={styles.cajaMorada}
            />
        <View
            style={styles.cajaNaranja}
            />
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28C4D9'
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: 'violet',
        borderWidth: 10,
        borderColor: "white",
        top: 0,
        right: 0,
        borderRadius: 10

    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: "white",
        bottom: 0,
        right: 0,
        borderRadius: 10

    },
    cajaVerde:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: "white",
        bottom: 0,
        left: 0,
        borderRadius: 10
    }
})