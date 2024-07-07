// FillBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FillBar({ step, totalSteps }) {
  const fillWidth = `${(step / totalSteps) * 100}%`;

  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: fillWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
    marginVertical: 10,
  },
  fill: {
    height: '100%',
    backgroundColor: '#000',
    borderRadius:10
  },
});
