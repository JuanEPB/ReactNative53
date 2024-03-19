import React from "react";
import { View, Text, Image,  FlatList, ActivityIndicator } from "react-native";
import { PokemonCard } from "../components/PokemonCard";
import { appTheme } from '../theme/appTheme';
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";

export const PokemonHome = () => {

  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <View
      style= {appTheme.globalContainer}
    >
      <Image
        source={require('../../assets/pokebola.png')}
        style={{
          top: -100,
          right: -100,
          height: 300,
          position: "absolute",
          opacity: 0.2,
          width: 200,
        }}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={ (pokemon) => pokemon.id}
        //Header

        ListHeaderComponent={(
          <Text
            style={{
              ...appTheme.title,
              ...appTheme.globalContainer,
              margin:20
            }}
          >
            Pokedex
          </Text>
        )}
        
        //Body
        showsVerticalScrollIndicator={false}
        //para cambiar el valor se tiene que reiniciar el aplicativo
        numColumns={2}
        renderItem={ ({item}) =>(
          <PokemonCard
            pokemon={item}
          />
          // <Text 
          //   style={{
          //     marginTop: 2, 
          //     marginBottom: 2, 
          //     marginHorizontal:10, 
          //     fontSize:10
          //   }}
          //   key={item.id}
          // >
          //   {item.picture}
          // </Text>
        )}

        //Ininite Scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.2} //Porcentaje de Contenido
        
        //Footer Component
        ListFooterComponent={(
          <ActivityIndicator
            style={{ height:100 }}
            size={ 40 }
            color="gray"
          />
        )}
      />
    </View>
  );
};
