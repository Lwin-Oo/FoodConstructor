import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { generateFoodProfile } from '../../../functions/foodprofiler';

import SearchBox from './components/searchbox/searchbox';
import SearchButton from './components/buttons/searchbuttons/homSearchButton';
import FoodCard from './components/cards/foodcard/foodcard';

import FlavorButton from './components/buttons/parameterButtons/flavorButton';
import AromaButton from './components/buttons/parameterButtons/aromaButton';
import TextureButton from './components/buttons/parameterButtons/textureButton';
import TemperatureButton from './components/buttons/parameterButtons/temperatureButton';

export default function App() {
  const [dishName, setDishName] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateProfile = async () => {
    setLoading(true); // Start loading
    setProfile(null); // Clear previous profile
    setError(null); // Clear previous error
    
    try {
      await generateFoodProfile(dishName, (data) => {
        if (data) {
          setProfile(data); // Set profile on success
          t
        } else {
          setError('Profile data is incomplete. Please try again.');
          
        }
      }, (errorMessage) => {
        setError(errorMessage);
        
      });
    } catch (e) {
      setError('Something went wrong. Please try again.');
      
    } finally {
      setLoading(false); // Stop loading
    }

  };

  const renderProfileData = () => {
    if (!profile || !profile["Phase 1"] || !profile["Phase 2"]) {
      // Limit retry to 3 attempts before showing a final error message
      

      return (
        <View>
          <Text style={{ color: 'red' }}>Invalid or incomplete profile data. Please try again.</Text>
          <TouchableOpacity onPress={handleGenerateProfile}>
            <Text style={{ color: '#1E90FF', marginTop: 10 }}>Retry ({retryCount}/3)</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={{ marginTop: 20 }}>
        <View style={styles.parameterCardsContainer}>
          <FlavorButton profile={profile} />
          <AromaButton profile={profile} />
          <TextureButton profile={profile} />
          <TemperatureButton profile={profile} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{ padding: 30 }}>
      <Text style={styles.title}>Food Profile Generator</Text>

      <View style={styles.searchContainer}>
        <SearchBox dishName={dishName} setDishName={setDishName} />
        <SearchButton onPress={handleGenerateProfile} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          {error && <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>}
          {profile ? (
            <>
              <FoodCard profile={profile} dishName={dishName} />
              {renderProfileData()}
            </>
          ) : null}
        </>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  parameterCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
