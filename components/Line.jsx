import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%', // Adjust width as needed
    backgroundColor: 'black', // Adjust color as needed
  },
});

export default Line;
