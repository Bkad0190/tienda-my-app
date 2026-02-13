import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuTopTabsScreen from './MenuTopTabsScreen'
import CommentsScreen from './CommentsScreen'
import React from 'react'

const Tab= createBottomTabNavigator

export default function MainTabsScreen() {
  return (

   < Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuTopTabs} />
      <Tab.Screen name="Comentarios" component={Comments} />
      <Tab.Screen name="Perfil" component={() => <Text style={{padding:20}}>Perfil (opcional)</Text>} />
    </Tab.Navigator>
  );
}

  


const styles = StyleSheet.create({})
