import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const FlavorPage = ({ route }) => {
  const { flavorProfile } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Flavor Profile</Text>
      <PieChart
        data={[
          { name: 'Sweet', population: flavorProfile.Sweet, color: '#fbb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Bitter', population: flavorProfile.Bitter, color: '#b0f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Salty', population: flavorProfile.Salty, color: '#f88', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Sour', population: flavorProfile.Sour, color: '#ff0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Umami', population: flavorProfile.Umami, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ]}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
};

export default FlavorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
