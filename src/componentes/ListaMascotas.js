//IMPORTAR COMPONENTES
import React, {Component} from 'react';
import {View, Text} from 'react-native';

//CUERPO
class ListaMascotas extends Component {
    render(){
         return ( <View ><Text>sadasdas</Text></View> );
    }
    //return <View style={styles.estiloVista}>{props.children}</View>
   
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
export default ListaMascotas;