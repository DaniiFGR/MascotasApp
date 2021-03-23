//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

//CUERPO

const Button = () => {
    
    return(
        <TouchableOpacity style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>Más Información</Text>
        </TouchableOpacity>
        );
}

//ESTILO
const styles={
    estiloTexto:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 7,
        paddingBottom: 7,
        color:'blue'
    },
    estiloBoton:{
  
        alignSelf: 'stretch',
        backgroundColor: 'pink',
        borderWidth: 2,
        paddingTop: 7,
        marginTop: 10,
        marginLeft: 7,
        marginRight: 7,
        marginBottom:15

    }
}

//EXPORTAR

export default Button;

