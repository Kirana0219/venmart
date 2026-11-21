import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CategoryList from "../component/categoryList";
import Lucide from "@react-native-vector-icons/lucide";
import theme from "../../../theme/theme";

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
    
        </View>
   );
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        padding: 8,
        marginTop: 10,
        marginHorizontal: 12,
        gap: 14,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 50,
    },
    searchInput: {
        fontSize: 16,
        fontWeight: "400"
    },
    searchIcon: {
        fontSize: 16,
        color: "#797979",
        fontWeight: "600"
    }
})

export default NewsScreen;