import { Viiew, Text,  FlatList, Image, TouchableOcpacity, ActivityIndicator,  StyleSheet, } from 'react-native'
import { useEffect, useState } from 'react'

import React from 'react'

export default function ProductosScreen(navigation) {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <ActivityIndicator style={{flex:1,justifyContent:'center'}} />;
  return (
    
    <View style={{flex:1}}>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalle', { item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{flex:1, paddingLeft:8}}>
              <Text numberOfLines={1} style={{fontWeight:'bold'}}>{item.title}</Text>
              <Text>Precio: ${item.price}</Text>
              <Text numberOfLines={1}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 8, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  image: { width: 70, height: 70, resizeMode: 'contain' }
});
