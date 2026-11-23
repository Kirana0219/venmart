import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../../theme/theme";
import { useRouter } from "expo-router";
import CategoryList from "../../news/component/categoryList";
import CustomSearchBar from "../../../shared/components/customSearchBar";
import FeaturedEventList from "../../event/components/featuredEventList";
import PopularEventList from "../../event/components/popularEventList";
import UpcomingEventList from "../../event/components/upcomingEventCard";
import LatestNewsList from "../../news/component/latestNewsList";

const HomeScreen = () => {
  const router = useRouter();
  const handleNews = (item) => router.push(`/news/${item.id}`);
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

        {/* Featured Event */}
        <View style={styles.eventContainer}>
          <Text style={styles.heading}>Recomendation for you</Text>
          <FeaturedEventList />
        </View>
        {/* Popular Event */}
        <View style={styles.eventContainer}>
          <Text style={styles.heading}>Popular Event</Text>
          <PopularEventList />
        </View>
        {/* Upcoming Event */}
        <View style={styles.eventContainer}>
          <Text style={styles.heading}>Upcoming Event</Text>
          <UpcomingEventList limit={2}/>
        </View>

        {/* Latest News */}
        <View style={styles.eventContainer}>
          <Text style={styles.heading}>Latest News</Text>
          <LatestNewsList onPress={handleNews} />
        </View>
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
  eventContainer: {
    gap: 4,
  },
  heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.neutral100,
  },
});

export default HomeScreen;
