import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DashboardScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Images/dashBg.png")} // Replace with the correct path to your background image
      style={styles.background}
      
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require("../assets/Images/dashSun.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../assets/Images/dashStar.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hello, Alice!</Text>
            <Text style={styles.subGreeting}>Welcome back.</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.buttonsContainer}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Calm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Focus</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Relax</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Breathe</Text>
              </TouchableOpacity>
            </ScrollView>
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
    marginTop: 30,
    padding: 20,
  },
  container: {
    flex: 1,
    marginTop: 350,
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
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 50,
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#5E8E9EC9",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginEnd: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 20,
    width:'50%',
    fontWeight:'bold'
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
