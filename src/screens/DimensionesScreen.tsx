import React from 'react';
import { View , Text, useWindowDimensions, StyleSheet} from 'react-native';


export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions(9)
return (
    <View
        style={styles.container}
    >
        <View
            style={{
                ...styles.cajaMorada,
                width: width * 0.6
            }}
        />
        <Text
            style={styles.title}
        >
        W: {width} H: {height}
        </Text>
    </View>
);
}

const styles=StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'violet'
    },
    cajaMorada:{
        backgroundColor: 'blue',
        height: '50%'
    },
    cajaNaranja:{
        backgroundColor:'orange'
    },
    title:{
        fontSize: 30,
        textAlign: 'center'
    }
})