import React from "react";
import news from "../data/dataNews";
import { View } from "react-native";
import LatestNewsCard from "./latestNewsCard";

const LatestNewsList = ({ onPress }) => {

    return (
        <View>
            {news.filter(item => [1,2,4,5,7,8,11,12,16,18,20,21].includes(item.id))
            .map((item) => (
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

