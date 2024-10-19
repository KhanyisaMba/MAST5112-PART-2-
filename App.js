import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;