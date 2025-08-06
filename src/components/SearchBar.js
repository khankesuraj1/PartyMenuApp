import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ query, setQuery }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 }
});