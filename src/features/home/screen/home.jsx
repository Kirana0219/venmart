import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../../theme/theme";
import { useRouter } from "expo-router";
import CategoryList from "../../news/component/categoryList";
import CustomSearchBar from "../../../shared/components/customSearchBar";
import FeaturedEventList from "../../event/components/featuredEventList";
import PopularEventList from "../../event/components/popularEventList";
import UpcomingEventList from "../../event/components/upcomingEventList";
import LatestNewsList from "../../news/component/latestNewsList";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  const router = useRouter();
  const handleNews = (item) => router.push(`/news/${item.id}`);
  const handleEvent = (item) => router.push(`/event/${item.id}`);
  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* Fixed Home Header */}
      <View style={styles.fixedHeader}>
        <HomeHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Start of search bar */}
          <CustomSearchBar
            title="Search events, artist, or locations..."
            icon="list-filter"
          />
          {/* Category Navigation */}
          <CategoryList />

          {/* Featured Event */}
          <View style={styles.eventContainer}>
            <Text style={styles.heading}>Recomendation for you</Text>
            <FeaturedEventList onPress={handleEvent} />
          </View>
          {/* Popular Event */}
          <View style={styles.eventContainer}>
            <Text style={styles.heading}>Popular Event</Text>
            <PopularEventList onPress={handleEvent} />
          </View>
          {/* Upcoming Event */}
          <View style={styles.eventContainer}>
            <Text style={styles.heading}>Upcoming Event</Text>
            <UpcomingEventList limit={3} onPress={handleEvent} />
          </View>

          {/* Latest News */}
          <View style={styles.eventContainer}>
            <Text style={styles.heading}>Latest News</Text>
            <LatestNewsList onPress={handleNews} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  fixedHeader: {
    paddingHorizontal: 20,
    paddingTop: theme.spacing.xs,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral20,
    zIndex: 10,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    gap: 12,
    backgroundColor: theme.colors.white,
  },

  eventContainer: {
    gap: 4,
    marginTop: 8,
  },

  heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.neutral100,
  },
});

export default HomeScreen;
