import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import theme from "../../../theme/theme";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* Profile and Greeting */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../../../assets/woman.png")}
          style={{ width: 40, height: 40 }}
        />

        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good evening, Kim Minji</Text>

          <Text style={styles.title}>Discover Events</Text>
        </View>
      </View>

      {/* Notification Button */}
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => console.log()}
      >
        <Lucide name="bell" size={22} color={theme.colors.neutral90} />

        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  greeting: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.neutral60,
  },

  title: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.neutral100,
  },

  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.neutral20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 9,
    height: 9,
    borderRadius: theme.radius.full,
    backgroundColor: "red",
  },
});

export default HomeHeader;