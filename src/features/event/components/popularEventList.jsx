import React from "react";
import { FlatList, View } from "react-native";
import event from "../data/dataEvent";
import EventCard from "./eventCard";

const PopularEventList = ({ item, onPress }) => {
  const popularEvent = event.filter((item) =>
    [6, 7, 8, 9, 10].includes(item.id),
  );

  return (
    <View>
      <FlatList
        horizontal
        data={popularEvent}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => (
          <EventCard item={item} onPress={() => onPress(item)} />
        )}
      />
    </View>
  );
};

export default PopularEventList;