import React from "react";
import theme from "../../theme/theme";
import { StyleSheet, TextInput, View } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";

const CustomSearchBar = ({ icon, title }) => {
  return (
    <View style={styles.searchContainer}>
      <Lucide name="search" style={styles.searchIcon} />
      <TextInput placeholder={title} style={styles.searchText} />
      {icon && <Lucide name={icon} style={styles.filterIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.primary80,
    borderRadius: theme.radius.full,
    paddingHorizontal: theme.spacing.lg,
    gap: 6,
  },
  searchText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.xs,
  },
  searchIcon: {
    color: theme.colors.primary100,
    fontSize: theme.fontSizes.body,
  },
  filterIcon: {
    marginLeft: "auto",
    color: theme.colors.primary100,
    fontSize: theme.fontSizes.body,
  },
});

export default CustomSearchBar;
