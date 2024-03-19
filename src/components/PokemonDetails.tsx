import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { PokemonFull, Versions } from '../interfaces/pokemonInterfaces';

interface Props{
    pokemon: PokemonFull;
}

export const PokemonDetail = ( {pokemon}: Props ) => {

    return(
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            { /* Types/tipos */ }
            <ScrollView>
            <View>
                <Text
                    style={{
                        ...style.title,
                        marginTop: 370,
                        marginHorizontal: 20,
                    }}
                >
                    Type(s)
                </Text>
                <View
                    style={{ flexDirection: "row" }}
                >
                    <ScrollView>
                    {
                        pokemon.types.map( ( { type } ) => (
                            <Text
                                style={{
                                    ...style.regularText,
                                    marginRight: 10,
                                    marginHorizontal: 20,
                                }}
                                key={type.name}
                            >
                                { type.name }
                            </Text>
                        ) )
                    }
                    </ScrollView>
                </View> 
                                {/* Weight/peso */}
                <Text style={style.title}>Weight</Text>
                <Text style={style.regularText}>
                    {pokemon.weight} lb
                </Text>
                                {/** Habilidades */}
                
                <View style={style.abilitiesContainer}>
                <Text style={style.title}>Habilidades</Text>
                    {pokemon.abilities.map(({ ability }) => (
                        <Text key={ability.name} style={style.ability}>
                            {ability.name}
                        </Text>
                    ))}
                </View>
                                        {/** Informacion */}
                <View style={style.infoContainer}>
                    <View style={style.infoRow}>
                        <Text style={style.infoLabel}>Base Experience:</Text>
                        <Text style={style.infoValue}>{pokemon.base_experience}</Text>
                    </View>

                    <View style={style.infoRow}>
                        <Text style={style.infoLabel}>Height:</Text>
                        <Text style={style.infoValue}>{pokemon.height}</Text>
                    </View>

                    <View style={style.infoRow}>
                        <Text style={style.infoLabel}>Weight:</Text>
                        <Text style={style.infoValue}>{pokemon.weight} lbs</Text>
                    </View>
                </View>

                                {/** Indices de juego */}
                <View style={style.gameIndicesContainer}>
                <Text style={style.title}>Game Indices</Text>
                    {pokemon.game_indices.map(({ game_index, version }) => (
                        <Text key={game_index} style={style.gameIndex}>
                            {version.name}: {game_index}
                        </Text>
                    ))}
                </View>

                {/** Moves */}
                <View style={{
                    ...style.movesContainer,
                    marginTop: 5,
                }}>
                <Text style={style.title}>Movimientos</Text>
                    {pokemon.moves.map(({ move }) => (
                        <Text key={move.name} style={style.move}>
                            {move.name}
                        </Text>
                    ))}
                </View>
                        {/** Crias */}
                {/* <View>
                    {pokemon.cries.latest}
                    {pokemon.cries.legacy}
                </View> */}
                { /* Sprites/Imágenes */ }
                <View
                    style={{ 
                        ...style.container,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            ...style.title,
                        }}
                    >
                        Sprites
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_default
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_shiny
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_shiny
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ style.basicSprite }
                        />
                    </ScrollView>
                </View>
            </View>
            </ScrollView>
        </ScrollView>
    );
}

const style = StyleSheet.create({

    basicSprite:{
        height: 100,
        width: 100,
    },
   container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingTop: 20,
},
card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
},
regularText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
},
typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,
},
type: {
    backgroundColor: '#ffcc80',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
},
abilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
},
ability: {
    backgroundColor: '#a5d6a7',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
},
infoContainer: {
    marginBottom: 20,
},
infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
},
infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
},
infoValue: {
    fontSize: 16,
    color: '#666',
},
gameIndicesContainer: {
    marginBottom: 20,
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20
},
gameIndex: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
},
movesContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
},
move: {
    backgroundColor: '#81d4fa',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
},
spritesContainer: {
    marginBottom: 20,
    alignItems: 'center',
},
sprite: {
    width: 100,
    height: 100,
    margin: 10,
},
});
