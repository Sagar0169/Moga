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

export default function Login({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/BgLogin.png")} // Replace with the correct path
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Login</Text>
          <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.loginText}>
              New To Moga?{" "}
              <Text style={styles.loginLink}>Sign up for free</Text>
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
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            Forgot your password?
          </Text>
        </Pressable>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("DashboardScreen")}
        >
          <Text style={styles.buttonText}>Login</Text>
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
