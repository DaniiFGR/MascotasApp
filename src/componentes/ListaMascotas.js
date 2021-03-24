//IMPORTAR LIBS Y COMPONENTES
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import DetalleMascotas from './DetalleMascotas';

//CUERPO DEL COMPONENTE
class ListaMascotas extends Component {
    state = { ListaMascotas: [] };
    componentDidMount() {
        //axios.get("https://givecars.herokuapp.com/")
        axios.get("http://192.168.100.49:8080/WSRMascotas/webresources/udenar.mascotas/")
            .then(response => {
                this.setState({ ListaMascotas: response.data });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });


    }
    listaMostrar = () => {
        return this.state.ListaMascotas.map(mascotas => {
            return <DetalleMascotas key={mascotas.id} mascotas={mascotas}></DetalleMascotas>
        });
    };
    render() {
        //return ( <View ><Text>Mascotitasssss!</Text></View> );
        console.log(this.state);
        return <ScrollView >{this.listaMostrar()}</ScrollView>;
    }
    //return <View style={styles.estiloVista}>{props.children}</View>

}

//ESTILOS
const styles = {
    estiloVista: {
        borderWidth: 0,
        //borderColor: 'red',
        borderBottomWidth: 0,
        //shadowColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
};

//EXPORTAR COMPONENTE
export default ListaMascotas;