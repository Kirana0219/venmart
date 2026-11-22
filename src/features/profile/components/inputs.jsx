import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import theme from "../../../theme/theme";

const CustomInputs = ({ text, title }) => {
  return (
    <View style={styles.inputCard}>
      <Text style={styles.heading}>{title}</Text>
      <TextInput style={styles.textInput}>{text}</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.body,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.neutral60,
  },
  textInput: {
    backgroundColor: theme.colors.neutral10,
    borderWidth: 1,
    borderColor: theme.colors.neutral20,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.lg,
    color: theme.colors.neutral90,
  },
});

export default CustomInputs;
