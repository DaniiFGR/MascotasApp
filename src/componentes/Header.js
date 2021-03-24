//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import { ProgressViewIOSComponent, Text, View } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';

//CUERPO DEL COMPONENTE

const Header = (props) => {
    const { estiloTexto, estiloVista, estiloContenedor } = styles;

    return (<View style={estiloContenedor}><Text style={estiloTexto}>{props.titulo}</Text></View>

    );
}

//ESTILOS

const styles = {
    estiloTexto: {
        fontSize: 45,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 1, height: 2 },
        //textShadowOffset: {width: 0, height: 1},
        fontFamily: 'Roboto',
        textShadowRadius: 6,
        color: '#0BF7DC',
        opacity: 1,

    },
    estiloContenedor: {
        borderRadius: 50,
        borderWidth: 0,
        opacity: .8,
        backgroundColor: '#F2F2F2',
        // textAlign: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,

    },
    estiloVista: {
        //backgroundColor: '#ffff',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 25
    }
}

//EXPORTAR COMPONENTE

export default Header;