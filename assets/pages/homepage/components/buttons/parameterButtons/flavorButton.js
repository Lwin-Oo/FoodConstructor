import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlavorButton = ({ profile }) => {
  const navigation = useNavigation();

  if (!profile || !profile["Phase 2"] || !profile["Phase 2"]["The Dive"]["Flavor Profile"]) {
    console.log("No Flavor Profile available");
    return null;
  }

  // Extract flavor profile and find the dominant flavor
  const flavorProfile = profile["Phase 2"]["The Dive"]["Flavor Profile"];
  const dominantFlavor = Object.keys(flavorProfile).reduce((a, b) => flavorProfile[a] > flavorProfile[b] ? a : b);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('FlavorPage', { flavorProfile })}
    >
      <Text style={styles.cardTitle}>Flavor</Text>
      <Text style={styles.dominantFlavor}>{dominantFlavor}</Text>
    </TouchableOpacity>
  );
};

export default FlavorButton;

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 60,
    backgroundColor: '#FFDDC1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dominantFlavor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
});
