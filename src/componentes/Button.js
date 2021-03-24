//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

//CUERPO DEL COMPNENTE

const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.boton} style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>Más Información</Text>
        </TouchableOpacity>
    );
}

//ESTILOS
const styles = {
    estiloTexto: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 3,
        paddingBottom: 7,
        marginTop: 4,

        color: '#233549'
    },
    estiloBoton: {

        alignSelf: 'stretch',

        backgroundColor: 'rgba(255,83,128,0.8)',
        borderWidth: 0,
        paddingTop: 2,
        paddingBottom: 5,
        marginTop: 5,
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,



    }
}

//EXPORTAR COMPONENTE

export default Button;

