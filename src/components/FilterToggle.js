import React from 'react';
import { View, Button } from 'react-native';

export default function FilterToggle({ filter, setFilter }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 8 }}>
      <Button title={`Veg: ${filter.veg ? 'ON' : 'OFF'}`} onPress={() => setFilter({ ...filter, veg: !filter.veg })} />
      <Button title={`Non-Veg: ${filter.nonVeg ? 'ON' : 'OFF'}`} onPress={() => setFilter({ ...filter, nonVeg: !filter.nonVeg })} />
    </View>
  );
}