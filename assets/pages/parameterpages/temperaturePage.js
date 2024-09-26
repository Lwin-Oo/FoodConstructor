import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const TemperaturePage = ({ route }) => {
  const { temperatureProfile } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Temperature Profile</Text>
      <PieChart
        data={[
          { name: 'Hot', population: temperatureProfile.Hot, color: '#FF6B6B', legendFontColor: '#4A4A4A', legendFontSize: 15 },
          { name: 'Cold', population: temperatureProfile.Cold, color: '#1E90FF', legendFontColor: '#4A4A4A', legendFontSize: 15 },
          { name: 'Room Temperature', population: temperatureProfile["Room Temperature"], color: '#32CD32', legendFontColor: '#4A4A4A', legendFontSize: 15 }
        ]}
        width={Dimensions.get('window').width - 40}
        height={240}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ff8c00',
          backgroundGradientTo: '#ffa500',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 }
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
        hasLegend={true}
        animate
      />
    </View>
  );
};

export default TemperaturePage;

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
