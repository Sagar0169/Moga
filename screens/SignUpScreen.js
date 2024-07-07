import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import CustomTextInput from "../Components/CustomTextInput";

export default function SignUpScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/BgLogin.png")} // Replace with the correct path
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Create an account to access meditations, sleep sounds, music to help
            you focus, and more.
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text
                style={styles.loginLink}
                onPress={() => navigation.navigate("Login")}
              >
                Log In
              </Text>
            </Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 30 }}>
          <CustomTextInput
            placeholder="Email address"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
            Link an account to log in faster in the future{" "}
          </Text>
          <View style={styles.socialLoginContainer}>
            <Image
              source={require("../assets/Images/google1.png")}
              style={styles.socialIcon}
            />
            <Image
              source={require("../assets/Images/facebook1.png")}
              style={styles.socialIcon}
            />
            <Image
              source={require("../assets/Images/apple1.png")}
              style={styles.socialIcon}
            />
          </View>
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
    padding: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    width: 250,
    marginVertical: 20,
  },
  loginText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  loginLink: {
    color: "#CB9A62",
    textDecorationLine: "underline",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    marginVertical: 20,
    elevation: 10,
    shadowColor: "#26262",
    marginHorizontal: 25,
  },
  buttonText: {
    color: "#000000",
    fontSize: 22,
    alignSelf: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
});
