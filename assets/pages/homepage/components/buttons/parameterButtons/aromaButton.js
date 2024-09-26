import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AromaButton = ({ profile }) => {
  const navigation = useNavigation();

  if (!profile || !profile["Phase 2"] || !profile["Phase 2"]["The Dive"]["Aroma Profile"]) {
    console.log("No Aroma Profile available");
    return null;
  }
  const aromaProfile = profile["Phase 2"]["The Dive"]["Aroma Profile"];
  const dominantAroma = Object.keys(aromaProfile).reduce((a, b) => aromaProfile[a] > aromaProfile[b] ? a : b);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('AromaPage', { aromaProfile })}
    >
      <Text style={styles.cardTitle}>Aroma</Text>
      <Text style={styles.dominantAroma}>{dominantAroma}</Text>
    </TouchableOpacity>
  );
};

export default AromaButton;

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
  dominantAroma: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',  
  },
});
