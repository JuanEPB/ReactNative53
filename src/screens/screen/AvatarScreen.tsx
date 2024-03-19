import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchImage } from "../../components/TouchImage";
import { appTheme } from '../../theme/appTheme';

export const AvatarScreen = () => {
  return (
    <View
    style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMargin,
        alignItems:"center"
    }}
    >
      <Text>felx</Text>
    </View>
  );
};

const style=StyleSheet.create({

})