import React, { useState } from "react";
import theme from "../../../theme/theme";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import ActivityCaregoryList from "../component/activityCategoryList";
import CustomSearchBar from "../../../shared/components/customSearchBar";
import ActivityList from "../component/activityList";

const ActivityScreen = () => {

    const [selectedStatus, setSelectedStatus] = useState("Paid")
    
    return(
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            <View>
                <CustomSearchBar      
                    title={"Search event by title or order ID..."}                
                    icon="list-filter" 
                />
            </View>
            <ActivityCaregoryList
                selectedStatus={selectedStatus}
                onSelect={setSelectedStatus}
            />
            <ActivityList selectedStatus={selectedStatus}/>
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