import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, ActivityIndicator } from "react-native";

export default function SuccessScreen({ navigation }) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      navigation.navigate("Login");
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Update countdown every second
      return () => clearTimeout(timer); // Clear timeout if the component is unmounted
    }
  }, [countdown, navigation]);

  return (
    <ImageBackground
      source={require("../assets/Images/BgLogin.png")} // Replace with the correct path
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/Images/success.png")} // Replace with the correct path
          style={styles.image}
        />
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.message}>Your password has been changed.</Text>
        <Text style={styles.message}>
          From now on use your new password to log in.
        </Text>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.redirectingText}>Redirecting to login page in {countdown} seconds...</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  loaderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  redirectingText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
  },
});

