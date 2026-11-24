import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryList from "../component/categoryList";
import theme from "../../../theme/theme";
import FeaturedNewsList from "../component/featuredNewsList";
import LatestNewsList from "../component/latestNewsList";
import { useRouter } from "expo-router";
import CustomSearchBar from "../../../shared/components/customSearchBar";

const NewsScreen = () => {

    const router = useRouter();
    const handleNews = (item) => router.push(`/news/${item.id}`);

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.continer}>
                <CustomSearchBar
                    title={'Search news by title or topic...'}
                    icon="list-filter"
                />
                <CategoryList/>
                
                <View style={styles.featuredNewsContainer}>
                    <Text style={styles.featuredNewsText}>Featured News</Text>
                    <FeaturedNewsList
                        onPress={handleNews}
                    />
                </View>

                <View style={styles.latestNewsContainer}>
                    <Text style={styles.latestNewsText}>Latest News</Text>
                    <LatestNewsList
                        onPress={handleNews}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 20,
        gap: 12,
        backgroundColor: theme.colors.white
    },
    featuredNewsContainer: {
        marginTop: 8,
    },
    featuredNewsText: {
        fontSize: theme.fontSizes.md,
        fontFamily: theme.fontFamily.semibold
    },
    latestNewsContainer: {
        marginTop: 8
    },
    latestNewsText: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: theme.fontSizes.md,
    }
})

export default NewsScreen;