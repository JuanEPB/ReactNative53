import React from "react";
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import { useFormularioHook } from "../../hooks/useFormularioHook";
import { BtnTouch } from "../../components/BtnTouch";

export const FormularioScreen = () => {
    const {formData, formList, handleInputChange, handleSubmit} = useFormularioHook();

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Formuario de Usuario</Text>
            <View>
                <TextInput
                    style={styles.input}
                    value={formData.username}
                    onChangeText={ (text) => handleInputChange ('username', text)}
                    placeholder="UserName"
                />
                <TextInput
                    style={styles.input}
                    value={formData.password}
                    secureTextEntry={true}
                    onChangeText={ (text) => handleInputChange ('password', text)}
                    placeholder="Password"
                />
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={ (text) => handleInputChange ('email', text)}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    value={formData.pin}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    onChangeText={ (text) => handleInputChange ('pin', text)}
                    placeholder="PIN"
                />
                <BtnTouch
                    action={handleSubmit}
                    title="Enviar"
                    background="gray"
                />
            </View>
            <View>
            <FlatList
        data={formList}
        keyExtractor={(item) => `${item.username}-${item.password}-${item.email}-${item.pin}`}
        renderItem={({ item }) => (
          
            <View style={styles.container}>
                <Text style={styles.title}>Registros</Text>
              <Text style={styles.text}>{`Username: ${item.username}`}</Text>
              <Text style={styles.text}>{`Password: ${item.password}`}</Text>
              <Text style={styles.text}>{`Correo: ${item.email}`}</Text>
              <Text style={styles.text}>{`PIN: ${item.pin}`}</Text>
            </View>

        )}
      />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      top: 100
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    text:{
        fontSize:20,
        marginBottom: 20,
    }
  });
  