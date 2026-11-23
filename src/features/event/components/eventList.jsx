import React from "react";
import theme from "../../../theme/theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EventList = ({ item, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.subcontent}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.readTime}>{item.readTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        width: "100%",
        minHeight: 100,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: "center",
        gap: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: theme.colors.neutral20,
        marginTop: 4,
        marginBottom: 6,
    },
    image: {
        width: 90,
        height: 80,
        resizeMode: "cover",
        borderRadius: 6,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    category: {
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.primary80,
        fontSize: theme.fontSizes.sm,
    },
    title: {
        width: "100%",
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
    },
    subcontent: {
        flexDirection: "row",
    },
    date: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: theme.fontSizes.sm,
        color: "#7c7c7c"
    },
    readTime: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: theme.fontSizes.sm,
        color: "#7c7c7c"
    },
});

export default EventList;