import React from "react";
import { FlatList, View } from "react-native";

import news from "../data/dataNews";
import FuturedNewsCard from "./featuredNewsCard";

const FeaturedNewsList = ({onPress}) => {

    const featuredNews = news
    .filter(item =>[22,17,15,20,7].includes(item.id));

    return (
        <View>
            <FlatList
                horizontal
                data={featuredNews}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 12 }} />
                )}
                renderItem={({ item }) => (
                    <FuturedNewsCard 
                        item={item} 
                        onPress={() => onPress(item)}
                    />
                )}
            />
        </View>
    );
};

export default FeaturedNewsList;