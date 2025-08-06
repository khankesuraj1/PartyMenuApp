import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function DishCard({ dish, isSelected, toggleSelection, onViewIngredient }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.desc}>{dish.description}</Text>
      {dish.image && <Image source={{ uri: dish.image }} style={styles.image} />}
      <Button
        title={isSelected ? 'Remove' : 'Add'}
        onPress={() => toggleSelection(dish.id)}
        color={isSelected ? 'red' : 'green'}
      />
      <Button title="Ingredient" onPress={onViewIngredient} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginVertical: 6, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold' },
  desc: { fontSize: 14, marginVertical: 4 },
  image: { width: '100%', height: 150, marginVertical: 8 }
});