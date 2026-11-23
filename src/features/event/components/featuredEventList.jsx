import React from "react";
import { FlatList, View } from "react-native";
import event from "../data/dataEvent";
import EventCard from "./eventCard";

const FeaturedEventList = ({ item, onPress }) => {
  const featuredEvent = event.filter((item) =>
    [1, 2, 3, 4, 5].includes(item.id),
  );

  return (
    <View>
      <FlatList
        horizontal
        data={featuredEvent}
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

export default FeaturedEventList;
