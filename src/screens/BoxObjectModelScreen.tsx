import React from 'react';
import { View , Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View
        style={{
            flex:1,
            backgroundColor:'green',
            justifyContent: 'center'
        }}
    >
        <Text
            style={{
                paddingHorizontal:100,
                paddingVertical:100,
                fontSize: 30,
                marginHorizontal:20,
                borderWidth: 10
            }}
        >
            Juan 
        </Text>
    </View>
  );
}
