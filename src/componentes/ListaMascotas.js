//IMPORTAR COMPONENTES
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

//CUERPO
class ListaMascotas extends Component {
    state = { ListaMascotas:[] };
    componentDidMount(){
       axios.get("https://givecars.herokuapp.com/")
         //axios.get("http://192.168.100.49:8080/WSRMascotas/webresources/udenar.mascotas/")
        .then(response => {
            this.setState({ListaMascotas: response.data });
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
      

    }
    render(){
         return ( <View ><Text>Mascotitasssss!</Text></View> );
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