import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import FillBar from "../Components/FillBar";
import NumberPicker from "../Components/NumberPicker";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const steps = [
  {
    type: "options",
    text: "What brings you to Moga?",
    subtitle:
      "By understanding your needs, we can provide personalized recommendations just for you.",
    options: [
      "Relax more",
      "Sleep Better",
      "Learn to meditate",
      "Reduce Anxiety",
      "Reduce stress",
    ],
  },
  {
    type: "options",
    text: "Do you experience any of the following?",
    subtitle: "",
    options: [
      "Restless",
      "Anxiety",
      "Difficult to concentrate",
      "Difficulty falling asleep",
      "None",
    ],
  },
  {
    type: "options",
    text: "Do you have experience with meditation?",
    subtitle: "",
    options: ["Yes", "No", "A Bit"],
  },
  {
    type: "numberPicker",
    text: "How many mindful minutes would you like to have in a day?",
    subtitle: "",
    min: 1,
    max: 20,
  },
  {
    type: "multiOptions",
    text: "Choose a few of the sounds you find relaxing",
    subtitle: "",
    options: [
      { label: "Ocean Sounds", image: require("../assets/Images/OceanSounds.png") },
      { label: "Birds Singing", image: require("../assets/Images/BirdsSinging.png") },
      { label: "Binaural Beats", image: require("../assets/Images/BinauralBeats.png") },
      { label: "Gong Sounds", image: require("../assets/Images/GongSounds.png") },
      { label: "Sounds of Rain", image: require("../assets/Images/SoundsOfRain.png") },
      { label: "White Noise", image: require("../assets/Images/WhiteNoise.png") },
      { label: "Lo Fi Beats", image: require("../assets/Images/LoFiBeats.png") },
      { label: "Fire Cracking", image: require("../assets/Images/FireCracking.png") },
    ],
  },
  // Add more steps here if needed
];

export default function OnboardingScreen({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(6); // Default number
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      navigation.navigate("FinalOnBoard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(null);
    } else {
      navigation.goBack();
    }
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const currentStepData = steps[currentStep] || {};

  return (
    <ImageBackground
      source={require("../assets/Images/Background.png")} // Update with your background image
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
        <View style={styles.fillBarContainer}>
          <FillBar step={currentStep + 1} totalSteps={steps.length} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.header}>{currentStepData.text}</Text>
          {currentStepData.subtitle ? (
            <Text style={styles.subtitle}>{currentStepData.subtitle}</Text>
          ) : null}
          {currentStepData.type === "options" && (
            <FlatList
              data={currentStepData.options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item === selectedOption && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedOption(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item === selectedOption && styles.selectedOptionText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={styles.optionList}
            />
          )}
          {currentStepData.type === "numberPicker" && (
            <View style={{ flex: 1 }}>
              <NumberPicker
                min={currentStepData.min}
                max={currentStepData.max}
                selectedNumber={selectedNumber}
                onSelectNumber={setSelectedNumber}
              />
            </View>
          )}
          {currentStepData.type === "multiOptions" && (
            <View style={{ flex: 1, width: '100%' }}>
              <FlatList
                data={currentStepData.options}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.multiOption,
                      selectedOptions.includes(item.label) && styles.selectedMultiOption,
                    ]}
                    onPress={() => toggleOption(item.label)}
                  >
                    <Image resizeMode="contain" source={item.image} style={styles.multiOptionImage} />
                    
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.label}
                contentContainerStyle={styles.multiOptionList}
              />
            </View>
          )}
          <TouchableOpacity
            style={[
              styles.button,
              !selectedOption &&
                currentStepData.type === "options" &&
                styles.buttonDisabled,
            ]}
            onPress={handleNext}
            disabled={!selectedOption && currentStepData.type === "options"}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  fillBarContainer: {
    paddingHorizontal: 20,
    marginBottom: 10, // Adjust as needed
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#fff",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  optionList: {
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: "flex-start", // Align text to the start (left)
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust background opacity
    width: width - 40,
  },
  selectedOption: {
    backgroundColor: "#252D41",
  },
  optionText: {
    color: "#000",
    fontSize: 16,
  },
  selectedOptionText: {
    color: "#fff", // Color for selected option
    fontWeight: "bold", // Optional: Make selected option text bold
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    elevation: 10,
    shadowColor: "#26262",
  },
  buttonDisabled: {
    backgroundColor: "#a9a9a9",
  },
  buttonText: {
    color: "#26262",
    fontSize: 16,
    fontWeight: "bold", // Make button text bold
  },
  multiOptionList: {
    justifyContent: "center",
  },
  multiOption: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000000",
    height:120
  },
  multiOptionImage: {
    width: (width - 60) / 2,
    height: (width - 60) / 2,
    
  },
  multiOptionText: {
    marginTop: 10,
    color: "#000",
    fontSize: 16,
  },
  selectedMultiOption: {
    borderColor: "#FFFFFF",
    borderWidth: 2,
    height:120
  },
  selectedMultiOptionText: {
    color: "#29AF97",
  },
});
