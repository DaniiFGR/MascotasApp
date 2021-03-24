//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';

//CUERPO DEL COMPENTE

const DetalleMascotas = (props) => {
    //const {estiloTexto}=styles; 
    //const {estiloView}=styles; 
    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>{props.mascotas.id}. {props.mascotas.raza}: {props.mascotas.nombre} </Text>
                </View>

            </ItemSeccion>

            <ItemSeccion>
                <Image style={styles.estiloImagen} source={{
                    uri: props.mascotas.imagen,

                }}
                />
            </ItemSeccion>

            <ItemSeccion>
                <Button boton={() => { Linking.openURL(props.mascotas.infromacion) }
                } />
            </ItemSeccion>
        </Item>
    );
}

//ESTILOS
const styles = {
    estiloContenedor: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
        opacity: .7,
        backgroundColor: '#0BF7DC',
        borderRadius: 20,

    },

    estiloImagen: {
        width: '100%',
        height: 300
    },

    estiloTexto: {
        fontSize: 25,
        fontWeigth: '200',
        //textTransform : 'uppercase'
        margin: 'auto',
    }
}

//EXPORTAR COMPONENTE

export default DetalleMascotas;