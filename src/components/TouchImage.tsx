import React, {useContext} from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { appTheme } from '../theme/appTheme';
import { AuthContext } from "../context/AuthContext";


interface Props{
    sourceImage: string;
}
export const TouchImage = ( {sourceImage}:Props) => {
    const { authState, changeFavImage} =useContext(AuthContext);

  return (
    <TouchableOpacity
    onPress={ () =>  {
        (!authState.isLoggedIn) 
        ? console.log("User not loggin") 
        : changeFavImage (sourceImage)
    }}
    >
        <Image
        style= {appTheme.avatar}
        source={{
            uri: sourceImage
        }}
        />
    </TouchableOpacity>
  );
};

const style=StyleSheet.create({

})