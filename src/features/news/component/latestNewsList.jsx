import React from "react";
import news from "../data/dataNews";
import { FlatList, View } from "react-native";
import LatestNewsCard from "./latestNewsCard";

const LatestNewsList = () => {

    const latestNews = news.filter(item => 
        [1,2,5,8,10,11,15,16,22,24].includes(item.id));

    return (
        <View>
            <FlatList
                data={latestNews}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}

                renderItem={({item}) => (
                    <LatestNewsCard item={item}/>
                )}
            />
        </View>
    );
}

export default LatestNewsList;
