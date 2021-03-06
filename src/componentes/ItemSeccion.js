//IMPORTAR COMPONENTES
import React from 'react';
import { View, Text } from 'react-native';

//CUERPO DEL COMPONENTE
const ItemSeccion = (props) => {
    return (
        <View style={styles.estiloVista}>{props.children}</View>
    );
}

//ESTILOS
const styles = {
    estiloVista: {
        borderBottomWidth: 0,
        //borderColor:'blue',
        padding: 5,
        flexDireccion: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
    }
};

//EXPORTAR COMPONENTE
export default ItemSeccion;