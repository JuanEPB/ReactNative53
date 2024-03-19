import React, { useContext } from "react";
import { View, Text } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamsDrawer } from "../../navigator/DrawerNavigator";
import { appTheme } from "../../theme/appTheme";
import { BtnTouch } from "../../components/BtnTouch";
import { AuthContext } from "../../context/AuthContext";

interface Props extends DrawerScreenProps<RootStackParamsDrawer, "Settings"> {}

export const Settings = ({ navigation }: Props) => {
  const { authState } = useContext(AuthContext);
  console.log(authState);
  return (
    <View
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMargin,
      }}
    >
      <BtnTouch
        title="Abrir menú"
        background="gray"
        action={() => navigation.toggleDrawer()}
      />
      <Text style={{ fontSize: 30, color: "black" }}>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
