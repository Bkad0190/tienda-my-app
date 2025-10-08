import {View, Text, TextInput, Button, FlatList, StyleSheet,  } from 'react-native'
import { useState } from 'react'

import React  from 'react'

export default function CommentsScreen() {
    const [alias, setAlias] = useState ('');
    const [rating, setRaiting] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const addComment = () => {
    if (!alias || !rating || !comment) return alert('Completa todos los campos');
    const newComment = { id: Date.now(), alias, rating, comment };
    setComments([newComment, ...comments]);
    setAlias(''); setRating(''); setComment('');
  };


 return (
    <View style={{flex:1, padding:16}}>
      <Text>Alias</Text>
      <TextInput style={styles.input} value={alias} onChangeText={setAlias} />
      <Text>Puntuación (1-5)</Text>
      <TextInput style={styles.input} value={rating} onChangeText={setRating} keyboardType="numeric" />
      <Text>Comentario</Text>
      <TextInput style={[styles.input,{height:80}]} value={comment} onChangeText={setComment} multiline />
      <Button title="Agregar comentario" onPress={addComment} />

      <FlatList
        style={{marginTop:16}}
        data={comments}
        keyExtractor={i => String(i.id)}
        renderItem={({item}) => (
          <View style={styles.commentCard}>
            <Text style={{fontWeight:'bold'}}>{item.alias} — {item.rating}/5</Text>
            <Text>{item.comment}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth:1, borderColor:'#ccc', padding:8, marginBottom:10, borderRadius:6 },
  commentCard: { padding:10, borderBottomWidth:1, borderColor:'#eee' }
});

