import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TemperatureButton = ({ profile, onPress }) => {
  const navigation = useNavigation();
  
  if (!profile || !profile["Phase 2"] || !profile["Phase 2"]["The Dive"]["Temperature Preference"]) {
    console.log("No Temperature Profile available");
    return null;
  }

  const temperatureProfile = profile["Phase 2"]["The Dive"]["Temperature Preference"];
  const dominantTemperature = Object.keys(temperatureProfile).reduce((a, b) => temperatureProfile[a] > temperatureProfile[b] ? a : b);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('TemperaturePage', { temperatureProfile })}
    >
      <Text style={styles.cardTitle}>Temperature</Text>
      <Text style={styles.dominantTemperature}>{dominantTemperature}</Text>
    </TouchableOpacity>
  );
};

export default TemperatureButton;

const styles = StyleSheet.create({
  card: {
    width: 100,  
    height: 60,  
    backgroundColor: '#FFDDC1', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
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
  dominantTemperature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',  
  },
});
