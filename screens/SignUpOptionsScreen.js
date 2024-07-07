import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

export default function SignUpOptionsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/welcomeBackground.png")} // Replace with the correct path
      style={styles.background}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title2}>MOGA!</Text>
        <Text style={styles.title3}>
          Create an account to get started on your health and happiness journey.
        </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/Images/signUpGlass.png")} // Replace with the correct path
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../assets/Images/google.png")}
                    resizeMode="contain"
                    style={styles.buttonImage}
                  />
                  <Text style={styles.buttonText}>Continue with Google</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../assets/Images/facebook.png")}
                    resizeMode="contain"
                    style={styles.buttonImage}
                  />
                  <Text style={styles.buttonText}>Continue with Facebook</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../assets/Images/apple.png")}
                    resizeMode="contain"
                    style={styles.buttonImage}
                  />
                  <Text style={styles.buttonText}>Continue with Apple</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../assets/Images/mail.png")}
                    resizeMode="contain"
                    style={styles.buttonImage}
                  />
                  <Text style={styles.buttonText}>Continue with Email</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By clicking Continue, you agree to our
                  <Text> </Text>
                  <Text style={styles.termsBoldUnderline}>
                    Terms and Conditions
                  </Text>
                  <Text> and acknowledge the </Text>
                  <Text style={styles.termsBoldUnderline}>Privacy Policy</Text>.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
              >
                <Pressable onPress={()=>navigation.navigate('Login')}>
                  <Text style={styles.termsText1}>
                    Already have an account?
                    <Text> </Text>
                    <Text style={styles.termsBoldUnderline1}>Log In</Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
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
  },
  welcomeContainer: {
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 50,
  },
  title: {
    fontSize: 58,
    color: "#fff",
    marginBottom: 10,
  },
  title2: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  title3: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    marginTop: 64,
  },
  buttonContainer: {
    marginHorizontal: 45,
    marginTop: 50,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    marginVertical: 20,
    elevation: 10,
    shadowColor: "#26262",
    marginHorizontal: 25,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginStart: 20,
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  buttonText: {
    color: "#26262",
    fontSize: 18,
    marginHorizontal: 15,
  },
  termsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginStart: 25,
  },
  termsText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 20,
  },
  termsText1: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 20,
  },
  termsBoldUnderline: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  termsBoldUnderline1: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#CB9A62",
  },
});
