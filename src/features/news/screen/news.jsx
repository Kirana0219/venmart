import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CategoryList from "../component/categoryList";
import Lucide from "@react-native-vector-icons/lucide";
import theme from "../../../theme/theme";
import FuturedNewsList from "../component/futuredNewsList";
import LatestNewsList from "../component/latestNewsList";
import { useRouter } from "expo-router";

const NewsScreen = () => {

    const router = useRouter();
    const handleNews = (item) => router.push(`/news/${item.id}`);

   return(
    <ScrollView>
        <View style={styles.continer}>
            <View style={styles.searchContainer}>
                <Lucide name="search" style={styles.searchIcon}/>
                <TextInput 
                    placeholder="search news by title or topic..." 
                    style={styles.searchInput}
                />
            </View>

            <CategoryList/>
            
            <View style={styles.futuredNewsContainer}>
                <Text style={styles.futuredNewsText}>Futured News</Text>
                <FuturedNewsList
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
        paddingHorizontal: 18,
        gap: 12,
        backgroundColor: theme.colors.white
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
        borderColor: theme.colors.primary20
    },
    searchInput: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 16,
        fontWeight: "400"
    },
    searchIcon: {
        fontSize: 18,
        color: theme.colors.primary80,
        fontWeight: "600"
    },
    futuredNewsContainer: {
        marginTop: 8,
    },
    futuredNewsText: {
        fontSize: theme.fontSizes.lg,
        fontFamily: theme.fontFamily.semibold
    },
    latestNewsContainer: {
        marginTop: 8
    },
    latestNewsText: {
        fontFamily: theme.fontFamily.semibold,
        fontSize: theme.fontSizes.lg,

    }
})

export default NewsScreen;