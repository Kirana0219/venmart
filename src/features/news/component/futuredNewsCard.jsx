import React from "react";
import theme from "../../../theme/theme";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FuturedNewsCard = ({item, onPress}) => {
    return(
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >   
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
                <View style={styles.categoryContainer}>
                    <View style={styles.category}>
                        <Text style={styles.categoryText}>{item.category}</Text>
                    </View>
                    <Text style={styles.date}>{item.date}</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subContent}>{item.subContent}</Text>
                </View>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 280,
        borderRadius: 14,
        overflow: "hidden",
        gap: 2,
        paddingBottom: 16,
        borderWidth: 0.5,
        borderColor: theme.colors.neutral20,
        gap: 6,
        marginTop: 4,
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        height: 150,
    },
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        marginTop: 4,
    },
    category: {
        marginHorizontal: 6,
        backgroundColor: theme.colors.primary20,
        padding: 2,
        paddingHorizontal: 12,
        alignSelf: "flex-start",
        borderRadius: 50,
    },
    categoryText: {
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.primary100,
        fontWeight: '600',
    },
    date: {
        fontFamily: theme.fontFamily.medium,
        fontWeight: "600",
        paddingHorizontal: 6,
        fontSize: theme.fontSizes.body,
        color: "#7c7c7c"
    },
    content: {
        padding: 4,
        gap: 4
    },
    title: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: 21,
        paddingHorizontal: 8,
        fontWeight: "600"
    },
    subContent: {
        paddingHorizontal: 6,
        fontFamily: theme.fontFamily.regular,
        fontSize: 16,
        color: "#7c7c7c"
    }
})
export default FuturedNewsCard;