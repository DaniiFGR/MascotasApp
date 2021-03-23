//IMPORTAR COMPONENTES
import React from 'react';
import {View, Text} from 'react-native';

//CUERPO
const Item = (props) => {
    return( <View style={styles.estiloVista}>{props.children}</View> );
}

//ESTILOS
const styles={
    estiloVista:{
        borderWidth:1,
        borderColor: 'red',
        borderBottomWidth: 0,
        shadowColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
};

//EXPORTAR COMPONENTE
export default Item;