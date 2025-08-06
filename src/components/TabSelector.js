import React from 'react';
import { View, Button } from 'react-native';

const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

export default function TabSelector({ selectedTab, setSelectedTab, selectedCount }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 8 }}>
      {categories.map((category) => (
        <Button
          key={category}
          title={`${category} ${selectedTab === category ? `(${selectedCount})` : ''}`}
          onPress={() => setSelectedTab(category)}
        />
      ))}
    </View>
  );
}