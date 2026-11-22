import React from "react";
import {Text} from "react-native";

import { useLocalSearchParams } from "expo-router";
import dataNews from "../../features/news/data/dataNews";
import DetailNews from "../../features/news/screen/detailNews";

const detailNewsRoute = () => {

    const { id } = useLocalSearchParams();
    const selectedNews = dataNews.find(
        (item) => item.id === Number(id)
    );

    if (!selectedNews) {
        return <Text>News not found</Text>;
    }

    return (
        <DetailNews/>
    );
};

export default detailNewsRoute;