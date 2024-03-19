import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fab } from "../components/Fab";

export const ContadorScreen = () => {
  const initialValor: number = 10;
  const [valor, setValor] = useState(initialValor);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>contador: {valor}</Text>
      <Fab
        title="+1"
        position="button_right"
        onPress={() => setValor(valor + 1)}
      />
      <Fab
        title="-1"
        position="button_left"
        onPress={() => setValor(valor - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
});
