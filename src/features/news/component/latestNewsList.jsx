import React from "react";
import news from "../data/dataNews";
import { FlatList, View } from "react-native";
import LatestNewsCard from "./latestNewsCard";

const LatestNewsList = ({ onPress }) => {
    return (
        <View>
            {news.map((item) => (
                <LatestNewsCard
                    key={item.id}
                    item={item}
                    onPress={() => onPress(item)}
                />
            ))}
        </View>
    );
};

export default LatestNewsList;

