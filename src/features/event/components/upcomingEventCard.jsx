import React from "react";
import event from "../data/dataEvent";
import { View } from "react-native";
import EventList from "./eventList";

const UpcomingEventList = ({ item, onPress, limit }) => {
     const displayedEvent = event.slice(0, limit);
  return (
    <View>
      {displayedEvent.map((item) => (
        <EventList
          key={item.id.toString()}
          item={item}
          onPress={() => onPress(item)}
        />
      ))}
    </View>
  );
};

export default UpcomingEventList;