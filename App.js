/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//IMPORTAR COMPONENTES - LIBRERIAS REQUERIDOS

import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Header from './src/componentes/Header.js';
import DetalleMascotas from './src/componentes/DetalleMascotas';
import Item from './src/componentes/Item';
import ItemSeccion from './src/componentes/ItemSeccion';
import ListaMascotas from './src/componentes/ListaMascotas';

//CUERPO DEL COMPONENTE
//const image = { uri: "https://image.freepik.com/vector-gratis/fondo-patron-huesos-huellas_1374-18.jpg" };
const image = { uri: "https://img.freepik.com/vector-gratis/pie-mascota-perro-dibujar-patrones-fisuras_5586-165.jpg?size=338&ext=jpg" };
//const image = { uri: "https://st.depositphotos.com/2459687/4663/v/950/depositphotos_46630117-stock-illustration-animal-seamless-vector-pattern-of.jpg" };
const App = () => {
  return (
    <View style={styles.container}> 
       <ImageBackground source={image} style={styles.image}>
      <Header titulo={"Firulais'Friends"} />
       <ListaMascotas />
     </ImageBackground>
    </View>
  );
};

//ESTILOS
const styles  = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
/*{
  estiloContenedor: {
      
     // backgroundColor: '#233549',
   backgroundColor: '#0BF7DC',
      //backgroundColor: '#82DDE0', 
     
  },
  

 
}
*/
//EXPORTAR EL COMPONENTE

export default App;
