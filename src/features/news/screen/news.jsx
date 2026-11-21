import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CategoryList from "../component/categoryList";
import Lucide from "@react-native-vector-icons/lucide";
import theme from "../../../theme/theme";
import FuturedNewsList from "../component/futuredNewsList";

const NewsScreen = () => {
   return(
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
                <FuturedNewsList/>
            </View>

        </View>
   );
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 18,
        gap: 14,
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
        fontSize: 16,
        fontWeight: "400"
    },
    searchIcon: {
        fontSize: 16,
        color: theme.colors.primary80,
        fontWeight: "600"
    },
    futuredNewsContainer: {
        paddingTop: 10,
    },
    futuredNewsText: {
        fontSize: theme.fontSizes.lg,
        fontWeight: "600"
    }
})

export default NewsScreen;