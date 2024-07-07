import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FinalOnboardingScreen({ navigation }) {
  const progress = useRef(new Animated.Value(0)).current;
  const [displayProgress, setDisplayProgress] = useState(0);
  const [status, setStatus] = useState([false, false, false]);

  const statusOpacity = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(progress, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          // Animation to 100% complete
          setTimeout(() => {
            navigation.navigate("Home");
          }, 1000); // Delay navigation to ensure visual completion
        });
      }, 2000);
    });

    progress.addListener(({ value }) => {
      setDisplayProgress(Math.round(value));
    });

    const animateStatus = (index, delay) => {
      setTimeout(() => {
        setStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[index] = true;
          return newStatus;
        });
        Animated.timing(statusOpacity[index], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, delay);
    };

    animateStatus(0, 1000);
    animateStatus(1, 2000);
    animateStatus(2, 5000);

    return () => {
      progress.removeAllListeners();
    };
  }, [progress, navigation]);

  const animatedStyle = {
    borderColor: progress.interpolate({
      inputRange: [0, 100],
      outputRange: ["#D3D3D3", "#1E90FF"],
    }),
    borderWidth: progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 20],
    }),
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../assets/Images/FinalOnboardingBg.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../assets/Images/back.png")} // Update the path to your back button image
              style={styles.backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.thankYouText}>Thank you for sharing</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.subtitle}>
              We are taking your data to {"\n"}create a personalized app
              experience.
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <Animated.View
                style={[styles.progressCircleInner, animatedStyle]}
              >
                <Text style={styles.progressText}>{displayProgress}%</Text>
              </Animated.View>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.statusItem}>
              <Animated.View
                style={[
                  styles.statusCircleUncheck,
                  status[0] && styles.statusCheckMark,
                  { opacity: statusOpacity[0] },
                ]}
              />
              <Animated.Text
                style={[
                  styles.statusText,
                  status[0] && styles.statusTextComplete,
                  { opacity: statusOpacity[0] },
                ]}
              >
                Analyzing answers
              </Animated.Text>
            </View>
            <View style={styles.statusItem}>
              <Animated.View
                style={[
                  styles.statusCircleUncheck,
                  status[1] && styles.statusCheckMark,
                  { opacity: statusOpacity[1] },
                ]}
              />
              <Animated.Text
                style={[
                  styles.statusText,
                  status[1] && styles.statusTextComplete,
                  { opacity: statusOpacity[1] },
                ]}
              >
                Performing calculations
              </Animated.Text>
            </View>
            <View style={styles.statusItem}>
              <Animated.View
                style={[
                  styles.statusCircleUncheck,
                  status[2] && styles.statusCheckMark,
                  { opacity: statusOpacity[2] },
                ]}
              />
              <Animated.Text
                style={[
                  styles.statusText,
                  status[2] && styles.statusTextComplete,
                  { opacity: statusOpacity[2] },
                ]}
              >
                Preparing suggestions
              </Animated.Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#272E3A",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#0F1217",
    textAlign: "center",
    marginBottom: 40,
    alignSelf: "center",
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  progressCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 10,
    borderColor: "#A7A7A7", // Default border color
    alignItems: "center",
    justifyContent: "center",
  },
  progressCircleInner: {
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    fontSize: 66,
    fontWeight: "bold",
    color: "#000",
  },
  statusContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  statusCheckMark: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#1E90FF",
    marginRight: 10,
  },
  statusCircleUncheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1D79AC",
    marginRight: 10,
  },
  statusText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  statusTextComplete: {
    textDecorationLine: "line-through",
    color: "#161D27",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    width: 24,
    height: 24,
  },
});
