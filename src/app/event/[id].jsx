import React from "react";
import {Text} from "react-native";
import { useLocalSearchParams } from "expo-router";
import event from "../../features/event/data/dataEvent";
import DetailEvent from "../../features/event/screen/detailEvent";

const detailEventRoute = () => {

    const { id } = useLocalSearchParams();
    const selectedEvent = event.find(
        (item) => item.id === Number(id)
    );

    if (!selectedEvent) {
        return <Text>Event not found</Text>;
    }

    return (
        <DetailEvent/>
    );
};

export default detailEventRoute;