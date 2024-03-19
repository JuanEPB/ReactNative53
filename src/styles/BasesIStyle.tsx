import React from 'react';
import { View } from 'react-native';

export const BasesIStyle = () => {
  return (
    <View>
        <View
            style={{
                backgroundColor: "blue",
                height: 100, //alto
                width: 100, //ancho
                paddingVertical: 50
            }}
        />
        <View
            style={{
                backgroundColor: "green",
                height: 100, //alto
                width: 100, //ancho
                paddingVertical: 50

            }}
        />
        <View
            style={{
                backgroundColor: "#000000",
                height: 100, //alto
                width: 100, //ancho
                paddingVertical: 10

            }}
        />
    </View>
  );
}