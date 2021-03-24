//IMPORTAR LIBS Y COMPONENTES
import React from 'react';
import { View, Text } from 'react-native';

//CUERPO DEL COMPONENTE

const Item = (props) => {
    return (<View style={styles.estiloVista}>{props.children}</View>);
}

//ESTILOS
const styles = {
    estiloVista: {
        borderWidth: 0,
        // borderColor: 'red',
        borderBottomWidth: 0,
        //shadowColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        padding: 5,
        flexDireccion: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
    }
};

//EXPORTAR COMPONENTE
export default Item;