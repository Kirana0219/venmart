import React from "react";
import news from "../data/dataNews";
import { FlatList, View } from "react-native";
import LatestNewsCard from "./latestNewsCard";

const LatestNewsList = ({item, onPress}) => {

    const latestNews = news.filter(item => 
        [1,2,5,8,10,11,17,16,23,24].includes(item.id));

    return (
        <View>
            <FlatList
                data={latestNews}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}

                renderItem={({item}) => (
                    <LatestNewsCard 
                        item={item}
                        onPress={() => onPress(item)}
                    />
                )}
            />
        </View>
    );
}

export default LatestNewsList;
