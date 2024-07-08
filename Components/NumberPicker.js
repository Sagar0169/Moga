import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const NumberPicker = ({ min, max, selectedNumber, onSelectNumber }) => {
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        horizontal
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.numberContainer,
              selectedNumber === item && styles.selectedNumberContainer,
            ]}
            onPress={() => onSelectNumber(item)}
          >
            <Text style={[styles.numberText, selectedNumber === item && styles.selectedNumberText]}>
              {item}
            </Text>
            {selectedNumber === item && (
              <Text style={styles.selectedNumberLabel}>min</Text>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.numberList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    height:100,
    justifyContent:'center'
  },
  numberList: {
    justifyContent: "center",
  },
  numberContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedNumberContainer: {
    borderColor: "#29AF97",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#F1F5F9", // Add background color for selected number
    paddingHorizontal: 30, // Add padding to make it appear as a box
  },
  numberText: {
    fontSize: 24,
    color: "#666666",
  },
  selectedNumberText: {
    color: "#252D41",
    fontWeight: "bold",
    fontSize:32
  },
  selectedNumberLabel: {
    fontSize: 14,
    color: "#252D41",
    marginTop: 5, // Adjust spacing between number and label
    fontWeight:'bold'
  },
});

export default NumberPicker;
