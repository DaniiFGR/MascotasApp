//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import {ProgressViewIOSComponent, Text, View} from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';

//CUERPO

const Header = (props) => {
    const {estiloTexto, estiloVista, estiloContenedor}=styles; 

    return(
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
        
    );
}

//ESTILO

const styles ={
    estiloTexto:{
        fontSize: 25,
        color: 'red'
    },
    estiloContenedor:{
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#ffff',
       // textAlign: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25
    },
    estiloVista:{
        backgroundColor: '#ffff',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 25
    }
}

//EXPORTAR

export default Header;