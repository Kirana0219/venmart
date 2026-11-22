import React from "react";
import theme from "../../../theme/theme";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import ActivityCaregoryList from "../component/activityList";

const ActivityScreen = () => {
    return(
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.searchContainer}>
                <View style={{flexDirection: "row", alignItems: "center"}}> 
                    <Lucide 
                        name="search" 
                        size={16} 
                        style={{color: theme.colors.primary100}}
                    />
                    <TextInput
                        placeholder="Search event or Order ID"
                        style={styles.searchText}
                    />
                </View>
                <View style={{justifyContent: "flex-end"}}>
                    <Lucide 
                        name="filter" 
                        size={16}
                        style={{color: theme.colors.primary100}}
                    />
                </View>
            </View>

            <ActivityCaregoryList/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: 18,
        paddingHorizontal: 20,
        gap: 4,
    },
    searchContainer: {
        backgroundColor: theme.colors.white,
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: theme.colors.primary80,
        borderRadius: 50,
        paddingHorizontal: 12,
        justifyContent: "space-between"
    },
    searchText: {
        fontFamily: theme.fontFamily.regular,
    },
})

export default ActivityScreen;