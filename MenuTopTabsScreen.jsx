import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductosScreen from './ProductosScreen';
import DetalleScreen from './DetalleScreen';
import React from 'react'

const Top = createMaterialTopTabNavigator();

export default function MenuTopTabsScreen() {
  return (
    <Top.Navigator>
      <Top.Screen name="Productos" component={Productos} />
      <Top.Screen name="Detalle" component={Detalle} />
    </Top.Navigator>
  );
}


const styles = StyleSheet.create({})
