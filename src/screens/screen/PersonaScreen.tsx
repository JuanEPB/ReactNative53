import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const params = route.params;

  return (
    <View>
      <Text>persona</Text>
      <Text>
        ID: {params.id}
        {"\n"}
        Nombre : {params.nombre}
        {"\n"}
        {JSON.stringify(params)}
      </Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View>
          <Text>Ir al inicio</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
