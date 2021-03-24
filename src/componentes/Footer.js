//IMPORTAR LIBS Y COMPONENTES
import React from 'react';
import { View, Text } from 'react-native';

//CUERPO DEL COMPONENTE

const Footer = (props) => {
    const { estiloTexto, estiloView } = styles;

    return (
        <View style={estiloView}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );
}

//ESTILOS

const styles = {
    estiloTexto: {
        fontSize: 10,
        color: 'black',
    },
    estiloView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4784EC',
        textAlingn: 'center',
        paddingTop: 1,
        paddingBottom: 1,
    },

};

//EXPORTAR COMPONENTE
export default Footer;