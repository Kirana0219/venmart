import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import theme from "../../theme/theme";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Ini halaman Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.xxl,
    color: theme.colors.primary100,
  }
});

export default Home;
