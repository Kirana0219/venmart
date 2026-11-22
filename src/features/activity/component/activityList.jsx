import React, { useState } from "react";
import { ActivityCategory } from "../data/activityData";
import { FlatList, View } from "react-native";
import ActivityCategoryCard from "./activityCategoryCard";

const ActivityCaregoryList = () => {
    const  [SelectedCategory, setSelectedCategory] = useState(1)

    return(
        <View>
            <FlatList
                horizontal
                data={ActivityCategory}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <ActivityCategoryCard
                        item={item}
                        isSelectedCategory={SelectedCategory === item.id}
                        onPress={() => setSelectedCategory(item.id)}
                    />
                )}
            />
        </View>
    );
}

export default ActivityCaregoryList;