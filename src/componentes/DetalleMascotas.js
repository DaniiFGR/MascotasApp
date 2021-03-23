//IMPORTAR LIBS Y COMPONENTES

import React from 'react';
import { Text, View, Image } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';

//CUERPO

const DetalleMascotas = () => {
    //const {estiloTexto}=styles; 
    //const {estiloView}=styles; 
    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                  <Text style={styles.estiloTexto}>Id</Text>
                    <Text style={styles.estiloTexto}>Razas</Text>
                    <Text style={styles.estiloTexto}>Nombre</Text>  
                </View>
                
            </ItemSeccion>

            <ItemSeccion>
                <Image style={styles.estiloImagen} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',
            
            }}
            />
            </ItemSeccion>

            <ItemSeccion>
                <Button/>
            </ItemSeccion>
        </Item>
    );
}

//ESTILO
const styles = {
    estiloContenedor:{
        flexDirection: "column",
        justifyContent: "space-between"
    },

    estiloImagen:{
       width: '100%',
        height: 300
    },

    estiloTexto:{
        fontSize:18,
        fontWeigth: '200',
        textTransform : 'uppercase'
    }
}
//EXPORTAR

export default DetalleMascotas;