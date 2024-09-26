import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const AromaPage = ({ route }) => {
    
  const { aromaProfile } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Aroma Profile</Text>
      <PieChart
        data={[
          { name: 'Fruity', population: aromaProfile.Fruity, color: '#fbb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Floral', population: aromaProfile.Floral, color: '#b0f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Spicy', population: aromaProfile.Spicy, color: '#f88', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Smoky', population: aromaProfile.Smoky, color: '#333', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Herbal', population: aromaProfile.Herbal, color: '#9c0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Earthy', population: aromaProfile.Earthy, color: '#6f6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ]}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 }
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
};

export default AromaPage;

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
