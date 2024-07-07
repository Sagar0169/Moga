import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({ placeholder, secureTextEntry, placeholderTextColor, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isFocused || value ? styles.filledInput : {}]}
        value={value}
        onChangeText={setValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon name={isPasswordVisible ? "visibility" : "visibility-off"} size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
    justifyContent: 'center',
   
  },
  input: {
    backgroundColor: "#235968",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    color: '#fff',
    textAlignVertical: 'center', // Ensure vertical alignment
    fontWeight: 'bold', // Make placeholder text bold
    
  },
  filledInput: {
    color: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 14,
    marginRight:10
  },
});

export default CustomTextInput;
