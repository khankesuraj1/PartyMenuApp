import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ingredients from '../data/ingredients.json';

export default function IngredientScreen({ route }) {
  const { dish } = route.params;
  const ingredientList = ingredients[dish.id] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.subtitle}>{dish.description}</Text>
      <FlatList
        data={ingredientList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - {item.quantity}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginVertical: 10 },
  item: { fontSize: 14, marginVertical: 2 }
});