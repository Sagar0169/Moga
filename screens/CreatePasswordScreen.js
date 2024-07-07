import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import CustomTextInput from "../Components/CustomTextInput";

export default function CreatePasswordScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Images/BgLogin.png")} // Replace with the correct path
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Create New Password</Text>
          <Text style={styles.loginText}>
            Your new password must be different from your previously used
            password.
          </Text>
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
          />
          <CustomTextInput
            placeholder="Confirm Password"
            placeholderTextColor="white"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('SuccessScreen')}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    marginVertical: 20,
    elevation: 10,
    shadowColor: "#26262",
    marginHorizontal: 20,
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
    marginHorizontal: 20,
  },
});
