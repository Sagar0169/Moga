import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

export default function WelcomeScreen({ navigation }) {
  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(arrowAnimation, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(arrowAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [arrowAnimation]);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationY < -50) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate("SignUpOptions");
          translateY.setValue(0); // Reset translation value
        });
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Images/welcomeBackground.png")} // Replace with the correct path
      style={styles.background}
    >
      <View
        style={{
          marginTop: 200,
          marginHorizontal: 20,
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title2}>MOGA!</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={styles.subtitle}>Swipe up to Create an account.</Text>
            <ImageBackground
              source={require("../assets/Images/homeDown.png")} // Replace with the correct path
              style={{ width: "100%", height: 130 }}
              resizeMode="cover"
            >
              <Animated.View
                style={{
                  transform: [{ translateY: translateY }],
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 20,
                    marginVertical: 20,
                  }}
                >
                  <Animated.Image
                    source={require("../assets/Images/icArrowUp.png")}
                    resizeMode="cover"
                    style={{
                      marginVertical: 20,
                      transform: [{ translateY: arrowAnimation }],
                    }}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SignUpScreen")}
                  >
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </ImageBackground>
          </Animated.View>
        </PanGestureHandler>
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
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 58,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  title2: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginBottom:20
  },
  button: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});
