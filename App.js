/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//IMPORTAR COMPONENTES - LIBRERIAS REQUERIDOS

import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/componentes/Header.js';
import DetalleMascotas from './src/componentes/DetalleMascotas';
import Item from './src/componentes/Item';
import ItemSeccion from './src/componentes/ItemSeccion';
import ListaMascotas from './src/componentes/ListaMascotas';

//CUERPO DEL COMPONENTE

const App = () => {
    return (
    <View style={{flex:1}}>
      <Header titulo={'Pinches perros'}/>
      <ListaMascotas/>
      
    </View>
  );
};

//EXPORTAR EL COMPONENTE

export default App;
