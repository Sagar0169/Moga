import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Images/dashboardBg.png")} // Replace with the correct path to your background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="sunny-outline" size={24} color="#fff" />
            <Icon name="star-outline" size={24} color="#fff" />
          </View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hello, Alice!</Text>
            <Text style={styles.subGreeting}>Welcome back.</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Calm</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Focus</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Relax</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Breathe</Text></TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Recommended Collections</Text>
          
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 28,
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#235968",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  cardRating: {
    fontSize: 14,
    color: "#000",
    position: "absolute",
    top: 10,
    right: 10,
  },
  feelingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  feelingIcon: {
    width: 40,
    height: 40,
  },
  refreshButton: {
    backgroundColor: "#235968",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  refreshButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DashboardScreen;
