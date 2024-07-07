import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen() {
  return (
    <ImageBackground
      source={require('../assets/Images/SplashScreen.png')} // Replace with your image path
      style={styles.container}
      resizeMode="cover"
    >
      {/* You can add other components like a logo or text here if needed */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
