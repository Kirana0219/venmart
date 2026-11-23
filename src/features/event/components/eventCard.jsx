import React from "react";
import theme from "../../../theme/theme";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";

const EventCard = ({ item, onPress }) => {
  const lowestPrice = Math.min(
    ...item.ticketOptions.map((ticket) => ticket.price),
  );
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {/* Event Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Event Category & Date*/}
      <View style={styles.categoryContainer}>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      {/* Event Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.bottomContent}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Lucide
              name="map-pin"
              style={{
                color: theme.colors.primary100,
                fontSize: theme.fontSizes.sm,
              }}
            />
            <Text style={styles.location}>{item.location}</Text>
          </View>
          <Text style={styles.price}>
            Rp{lowestPrice.toLocaleString("id-ID")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    minHeight: 300,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.neutral20,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: 150,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 12,
  },
  categoryWrapper: {
    backgroundColor: theme.colors.primary20,
    paddingHorizontal: theme.spacing.md,
    alignSelf: "flex-start",
    borderRadius: theme.radius.full,
  },
  categoryText: {
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.primary100,
  },
  date: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.neutral60,
  },
  content: {
    padding: theme.spacing.md,
    gap: 12,
    flex: 1,
  },
  title: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.md,
    lineHeight: 32,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral20,
    marginTop: "auto",
  },
  location: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.neutral40,
  },
  price: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary100,
  },
});

export default EventCard;
