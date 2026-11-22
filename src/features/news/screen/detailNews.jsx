import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import news from "../data/dataNews";
import theme from "../../../theme/theme";

const DetailNews = () => {

    const { id } = useLocalSearchParams();
    const item = news.find(
        (newsItem) => String(newsItem.id) === String(id)
    );

    if (!item) {
        return (
            <View style={styles.container}>
                <Text>News Not Found!</Text>
            </View>
        );
    }

    return (
        <ScrollView showsVerticalScrollIndicator= {false}>

            <View style={styles.container}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.authorContainer}>
                            <View style={styles.authorInfo}>
                                <Image 
                                    source={{uri:item.authorImage}}
                                    style={styles.imageAuthor}
                                />
                                    <View style={styles.subAuthorInfo}> 
                                        <Text style={styles.authorName}>{item.authorName}</Text> 
                                        <Text style={styles.date}>{item.date}</Text> 
                                    </View>
                            </View>
                            <Text style={styles.readTime}>{item.readTime}</Text>
                        </View>
                    <Text style={styles.contentText}>{item.content}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "white",
        paddingBottom: 50,
    },
    image: {
        height: 250,
    },
    contentContainer: {
        padding: 12,
        paddingHorizontal: 20,
        gap: 6,
    },
    category: {
        color: theme.colors.primary100,
        fontFamily: theme.fontFamily.semibold,
        backgroundColor: theme.colors.primary20,
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 50,
    },
    authorContainer: {
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary80,
        borderRadius: 16,
        justifyContent: "space-between",
        alignItems: "center"
    },
    authorInfo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    subAuthorInfo: {
        paddingHorizontal: 12,
    },
    imageAuthor: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    authorName: {
        fontFamily: theme.fontFamily.bold,
        fontSize: theme.fontSizes.body
    },
    date: {
        fontFamily: theme.fontFamily.medium,
        fontSize: theme.fontSizes.sm,
        color: theme.colors.neutral40
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: theme.fontSizes.lg
    },
    readTime: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.primary80,
    },
    contentText: {
        paddingTop: 12,
        fontFamily: theme.fontFamily.medium,
        fontSize: theme.fontSizes.body
    }
});

export default DetailNews;