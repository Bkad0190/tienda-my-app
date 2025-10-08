import { View, Text, Image, StyleSheet, Button  } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    const nombreEstudiante = "Coloca tu nomrbre aqui";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>{nombreEstudiante}</Text>
      <Image source={require('../assets/profile.png')} style={styles.image} />
      <Button title="Ir a Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 28, marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 16 },
  image: { width: 160, height: 160, marginBottom: 16, borderRadius: 80 }
});