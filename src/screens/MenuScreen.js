import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import FilterToggle from '../components/FilterToggle';
import TabSelector from '../components/TabSelector';
import DishCard from '../components/DishCard';
import dishes from '../data/dishes.json';

export default function MenuScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('MAIN COURSE');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ veg: true, nonVeg: true });
  const [selectedDishes, setSelectedDishes] = useState([]);

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.mealType === selectedTab &&
      ((filter.veg && dish.type === 'VEG') || (filter.nonVeg && dish.type === 'NON_VEG')) &&
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelection = (id) => {
    setSelectedDishes((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <FilterToggle filter={filter} setFilter={setFilter} />
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} selectedCount={selectedDishes.length} />
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            isSelected={selectedDishes.includes(item.id)}
            toggleSelection={toggleSelection}
            onViewIngredient={() => navigation.navigate('Ingredients', { dish: item })}
          />
        )}
      />
      <Text style={styles.totalCount}>Total Selected: {selectedDishes.length}</Text>
      <Button title="Continue" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  totalCount: { textAlign: 'center', padding: 8, fontWeight: 'bold' }
});