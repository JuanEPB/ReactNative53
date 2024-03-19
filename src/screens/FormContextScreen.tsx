import React, {useContext} from 'react';
import { View, Text, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { appTheme } from '../theme/appTheme';
import { BtnTouch } from '../components/BtnTouch';
import { useFormHookContext } from '../hooks/useFormHookContext';

export const FormContextScreen = () => {
    
    const {state, handleInputChange, handleSubmit} = useFormHookContext();

    const {authState} = useContext(AuthContext);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                marginHorizontal: 10,
                alignItems: "center"
            }}
        >
            <Text
                style={appTheme.title}
            >
                Formulario Usuario Context
            </Text>
            <View>
                
                <TextInput
                    style={ appTheme.input }
                    value={ state.input.username }
                    onChangeText={ (text) => handleInputChange( 'username', text ) }
                    placeholder='Nombre del usuario'
                />
                <TextInput
                    value={ state.input.password }
                    style={ appTheme.input }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange( 'password', text ) }
                    placeholder='Contraseña'
                />
                <TextInput
                    value={ state.input.cp }
                    style={ appTheme.input }
                    keyboardType='numeric'
                    onChangeText={ (text) => handleInputChange( 'cp', text ) }
                    placeholder='CP'
                />
                <BtnTouch
                    action={ handleSubmit }
                    title='Enviar Información'
                    background='black'
                />
            </View>
            <View>
                {
                    ( state.data.map( ( form, index ) => (
                        <Text 
                        key={index}
                        style= {{fontSize:20}}
                        >
                            { JSON.stringify(form) }
                        </Text>
                    )))
                }
            </View>
            <View>
                <Text
                    style= {{fontSize:20}}
                >
                    {JSON.stringify(authState)}
                </Text>
                {
                    ( authState.formData.map( ( form, index ) => (
                        <Text key={index}
                            style= {{fontSize:20}}
                        >
                            { JSON.stringify(form) }
                        </Text>
                    )))
                }
            </View>
        </View>
    );
}