import React from "react";
import { FlatList, View } from "react-native";

import news from "../data/dataNews";
import FuturedNewsCard from "./futuredNewsCard";

const FuturedNewsList = () => {

    const featuredNews = news.filter(item =>
        [1, 5, 10].includes(item.id)
    );

    return (
        <View>
            <FlatList
                horizontal
                data={featuredNews}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 12 }} />
                )}
                renderItem={({ item }) => (
                    <FuturedNewsCard item={item} />
                )}
            />
        </View>
    );
};

export default FuturedNewsList;