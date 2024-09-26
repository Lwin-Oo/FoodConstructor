import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  // Import the icon library

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name="search" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4285F4',  // Google blue
      borderRadius: 20,            // Rounded button
      padding: 12,                 // Ensures it's big enough for the icon
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
