import { View, Text, TextInput, Button, StyleSheet, Alert, Styles } from 'react-native'
import React, { useState } from 'react'


export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

const handleLogin = () => {
    if (user === 'root' && pass === '0000') {
      navigation.replace('Main'); // reemplaza el stack y navega a Main
    } else {
      Alert.alert('Credencial inválida', 'Usuario o contraseña incorrecta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuario</Text>
      <TextInput style={styles.input} value={user} onChangeText={setUser} autoCapitalize="none" />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.input} value={pass} onChangeText={setPass} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  label: { marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12, borderRadius: 6 }
});

