import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FoodCard = ({ profile }) => {
  const [showMoreCultural, setShowMoreCultural] = useState(false);
  const [showMoreDietary, setShowMoreDietary] = useState(false);

  if (!profile || !profile["Phase 1"] || !profile["Phase 1"]["The Foundation"]) {
    console.log("No Food Profile available");
    return null;
  }

  const culturalText = profile["Phase 1"]["The Foundation"]["Cultural and Regional Influences"];
  const dietaryText = profile["Phase 1"]["The Foundation"]["Dietary Restrictions and Health Goals"];
  const country = profile["Phase 1"]["The Foundation"]["Original Country"];
  const calories = profile["Phase 1"]["The Foundation"]["Calories"] || "N/A";
  const dishName = profile["Corrected Dish Name"] || "Unknown Dish";

  return (
    <View style={styles.card}>
      {/* First row: Country of Origin, Dish Name, and Calories */}
      <View style={styles.firstRow}>
        <Text style={styles.countryText}>{country}</Text>
        <Text style={styles.dishName}>{dishName}</Text>
        <Text style={styles.calories}>{calories} kcal</Text>
      </View>

      {/* Second row: Cultural Influence and Dietary Info with Show More option */}
      <View style={styles.secondRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.sectionTitle}>Cultural Influence</Text>
          <Text style={styles.textValue}>
            {showMoreCultural ? culturalText : `${culturalText.substring(0, 50)}...`}
          </Text>
          <TouchableOpacity onPress={() => setShowMoreCultural(!showMoreCultural)}>
            <Text style={styles.showMoreText}>
              {showMoreCultural ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>Dietary Info</Text>
          <Text style={styles.textValue}>
            {showMoreDietary ? dietaryText : `${dietaryText.substring(0, 50)}...`}
          </Text>
          <TouchableOpacity onPress={() => setShowMoreDietary(!showMoreDietary)}>
            <Text style={styles.showMoreText}>
              {showMoreDietary ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', 
    backgroundColor: '#FAF3E0', // Light cream color
    borderRadius: 15,
    padding: 15,
    marginVertical: 15,
    borderColor: '#FFD700',  // Gold border
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
  },
  dishName: {
    flex: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF4500', 
    textAlign: 'center',
  },
  calories: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 5,
    textAlign: 'right',
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    paddingRight: 10,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  textValue: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  showMoreText: {
    fontSize: 14,
    color: '#1E90FF',
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Aligns the "Show More" button with the start of the text
  },
});
