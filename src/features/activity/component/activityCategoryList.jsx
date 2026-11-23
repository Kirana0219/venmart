import React from "react";
import { ActivityCategory } from "../data/activityData";
import { FlatList, View } from "react-native";
import ActivityCategoryCard from "./activityCategoryCard";

const ActivityCaregoryList = ({ selectedStatus, onSelect}) => {

    return (
        <View>
            <FlatList
                horizontal
                data={ActivityCategory}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ActivityCategoryCard
                        item={item}
                        isSelectedCategory={selectedStatus === item.status}
                        onPress={() => onSelect(item.status)}
                    />
                )}
            />
        </View>
    );
};

export default ActivityCaregoryList;