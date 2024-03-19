import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { BtnTouch } from "../components/BtnTouch";
import { appTheme } from "../theme/appTheme";
import { useCounterHook } from "../hooks/useCounterHook";

interface Datos {
  count: number;
}

export const HooksScreen = () => {
  const initialState = (): Datos => {
    return {
      count: 10,
    };
  };

  const { valor, add, decrement, reset } = useCounterHook(initialState());

  return (
    <View>
      <Text>Contador: {valor.count}</Text>
      {"\n"}
      <Button title="+" onPress={() => add} />
      <Button title="reset" onPress={() => reset} />
      <Button title="-" onPress={() => decrement} />
    </View>
  );
};
