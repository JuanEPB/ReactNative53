import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { PokemonSimple } from '../interfaces/pokemonInterfaces';
import { useNavigation } from "@react-navigation/native";


interface Props{
    pokemon: PokemonSimple;
}

const widthWindows= Dimensions.get("window").width;

export const PokemonCard = ({pokemon}: Props) =>{
    const navigation = useNavigation();
    

    return(
        <TouchableOpacity
        onPress={ () => navigation.navigate("PokemonScreen",{PokemonSimple: pokemon})}
            activeOpacity={0.9}
        >
            <View
                style= {{
                    ...styles.cardContainer,
                    width: widthWindows * 0.4
                }}
            >
                {/** background */}
                {/* <View style={{
                    
                    backgroundColor: (color.length > 1) ? color[1] : color[0],
                }}/>
                <View style={{
                    
                    backgroundColor: color[0]
                }}
                /> */}
                {/* Nombre del Pokemon */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#'+pokemon.id}
                    </Text>
                </View>
                <Image
                    style={styles.pokebola}
                    source={require('../../assets/pokebolab.png')}
                />
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: pokemon.picture }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    cardContainer: {
        backgroundColor: "gray",
        marginHorizontal:10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden",
    },
    // backgroundTop:{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: "50%",
    //     transform: [
    //         {rotateX: "20deg"},
    //         {rotateY: "-45deg"},
    //         {scale: 2}
    //     ]
    // },
    // backgroundBottom:{
    //     position: "absolute",
    //     top: "50%",
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     transform: [
    //         {rotateX: "20deg"},
    //         {rotateY: "-45deg"},
    //         {scale: 2}
    //     ]
    // },
    name:{
        color: "white",
        fontSize:20,
        fontWeight: "bold"
    },
    pokebola:{
        height: 100,
        width:100,
        position: "absolute",
        bottom: -20,
        right:-20,
        opacity: 0.5,
    },
    pokemonImage:{
        width: 100,
        height: 100,
        position: "absolute",
        right: -8, //derecha
        bottom: -5,
    }

})