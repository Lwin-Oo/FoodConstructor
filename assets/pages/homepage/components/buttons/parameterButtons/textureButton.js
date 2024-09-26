import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TextureButton = ({ profile }) => {
  const navigation = useNavigation();
  
  if (!profile || !profile["Phase 2"] || !profile["Phase 2"]["The Dive"]["Texture Profile"]) {
    console.log("No Texture Profile available");
    return null;
  }
  const textureProfile = profile["Phase 2"]["The Dive"]["Texture Profile"];
  const dominantTexture = Object.keys(textureProfile).reduce((a, b) => textureProfile[a] > textureProfile[b] ? a : b);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        navigation.navigate('TexturePage', { textureProfile });
      }}
      
    >
      <Text style={styles.cardTitle}>Texture</Text>
      <Text style={styles.dominantTexture}>{dominantTexture}</Text>
    </TouchableOpacity>
  );
};

export default TextureButton;

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
  dominantTexture: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',  
  },
});
