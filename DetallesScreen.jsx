import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function DetallesScreen({route}) {
    const item = route?. params.item;
    if (!item) return (
    <View style={{padding:20}}><Text>Selecciona un producto y vera detalles.</Text></View>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.small}>Categoría: {item.category}</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  image: { width: 200, height: 200, resizeMode: 'contain' },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 12 },
  price: { fontSize: 16, marginTop: 8 },
  desc: { marginTop: 12 },
  small: { marginTop: 8, color: '#555' }
});
