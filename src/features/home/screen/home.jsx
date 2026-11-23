import React from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import theme from "../../../theme/theme";
import Lucide from "@react-native-vector-icons/lucide";
import CategoryList from "../../news/component/categoryList";
import CustomSearchBar from "../../../shared/components/customSearchBar";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Start of search bar */}
        <CustomSearchBar
          title="Search events, artist, or locations..."
          icon="list-filter"
        />
        {/* End of search bar */}

        <CategoryList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: 18,
    gap: 24,
    backgroundColor: theme.colors.white,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.primary20,
  },
  searchInput: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    fontWeight: "400",
  },
  searchIcon: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary80,
    fontWeight: "600",
  },
  filterIcon: {
    marginLeft: "auto",
    color: theme.colors.primary100,
    fontSize: theme.fontSizes.body,
  },
});

export default Home;
