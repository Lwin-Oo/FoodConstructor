import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const SearchBox = ({ dishName, setDishName }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        onChangeText={text => setDishName(text)}
        value={dishName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginRight: 10,
      marginVertical: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    input: {
      width: '95%',
      height: 50,
      borderRadius: 25,
      backgroundColor: '#F1F3F4',
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      fontSize: 16,
    },
  });

export default SearchBox;
