import React from "react";
import { useCounterReducer } from "../hooks/useCounterReducer";
import { BtnTouch } from "../components/BtnTouch";
import { appTheme } from "../theme/appTheme";
import { View, Text } from "react-native";

interface AuthState {
  count: number;
}

export const UseReducerScreen = () => {
  const initialState: AuthState = {
    count: 10,
  };
  const { state, add, decrement, reset } = useCounterReducer(initialState);
  return (
    <View
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMargin,
      }}
    >
      <Text> custom hook useCounterReducer: {state.count}</Text>
      <BtnTouch title="+" action={add} background="red" />
      <BtnTouch title="reset" action={reset} background="blue" />
      <BtnTouch title="-" action={decrement} background="red" />
    </View>
  );
};
