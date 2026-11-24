import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import event from "../data/dataEvent";
import theme from "../../../theme/theme";
import Lucide from "@react-native-vector-icons/lucide";
import CustomButton from "../../../shared/components/customButton";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailEvent = () => {
  const { id } = useLocalSearchParams();
  const item = event.find((eventItem) => String(eventItem.id) === String(id));
  const totalAvailable = item?.ticketOptions.reduce(
    (total, ticket) => total + ticket.available,
    0,
  );
  const lowestPrice = Math.min(
    ...item.ticketOptions.map((ticket) => ticket.price),
  );

  if (!item) {
    return (
      <View>
        <Text>Event Not Found!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["bottom"]}
    >
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "Edit Profile",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Image Cover Event */}
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />

          {/* Event Content */}
          <View style={styles.contentContainer}>
            {/* Category & Available Tickets */}
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.tickets}>{totalAvailable} tickets left</Text>
            </View>

            {/* Title Event */}
            <Text style={styles.title}>{item.title}</Text>

            {/* Organizer */}
            <View style={styles.organizerContainer}>
              <Image
                source={{ uri: item.organizerImage }}
                style={{ width: 50, height: 50, borderRadius: theme.radius.full }}
              />
              <View>
                <Text style={styles.subTitle}>{item.organizer}</Text>
                <Text style={styles.subInfo}>{item.organizerPhone}</Text>
              </View>
              <View style={[styles.iconWrapper, { marginLeft: "auto" }]}>
                <Lucide name="phone" style={{ fontSize: theme.fontSizes.md }} />
              </View>
            </View>

            <View style={{ gap: 4, marginBottom: 12 }}>
              {/* Date & Time */}
              <View style={styles.eventInfoContainer}>
                <View style={styles.iconWrapper}>
                  <Lucide
                    name="calendar"
                    style={{ fontSize: theme.fontSizes.md }}
                  />
                </View>
                <View>
                  <Text style={styles.subTitle}>{item.date}</Text>
                  <Text style={styles.subInfo}>{item.time}</Text>
                </View>
              </View>

              {/* Location & Address */}
              <View style={styles.eventInfoContainer}>
                <View style={styles.iconWrapper}>
                  <Lucide
                    name="map-pin"
                    style={{ fontSize: theme.fontSizes.md }}
                  />
                </View>
                <View>
                  <Text style={styles.subTitle}>{item.location}</Text>
                  <Text style={styles.subInfo}>{item.address}</Text>
                </View>
              </View>
            </View>

            {/* About Event */}
            <View style={{ gap: 4 }}>
              <Text style={styles.subTitle}>About Event</Text>
              <Text style={styles.contentText}>{item.description}</Text>
            </View>

            {/* Ticket Type */}
            <View style={{ gap: 4 }}>
              <Text style={styles.subTitle}>Select Ticket</Text>
              {item.ticketOptions.map((ticket) => (
                <View key={ticket.id} style={styles.ticketTypeContainer}>
                  <View>
                    <Text style={styles.subTitle}>{ticket.name}</Text>
                    <Text style={styles.subInfo}>
                      {ticket.available} tickets left
                    </Text>
                  </View>
                  <Text style={styles.price}>
                    Rp{ticket.price.toLocaleString("id-ID")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action */}
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.subInfo}>Total Price</Text>
            <Text style={[styles.price, { marginLeft: "none" }]}>
              Rp{lowestPrice.toLocaleString("id-ID")}
            </Text>
          </View>
          <CustomButton
            title="Buy Ticket"
            style={{ flex: 1, paddingVertical: theme.spacing.md }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
    paddingBottom: theme.spacing.xl,
  },
  image: {
    height: 250,
  },
  contentContainer: {
    padding: 12,
    paddingHorizontal: 20,
    gap: 12,
  },
  category: {
    color: theme.colors.primary100,
    fontFamily: theme.fontFamily.semibold,
    backgroundColor: theme.colors.primary20,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.lg,
  },
  tickets: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral50,
    marginLeft: "auto",
  },
  organizerContainer: {
    flexDirection: "row",
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.primary80,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  subTitle: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.body,
    lineHeight: 24,
  },
  subInfo: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.neutral40,
  },
  iconWrapper: {
    backgroundColor: theme.colors.primary20,
    color: theme.colors.primary100,
    borderRadius: theme.radius.full,
    padding: theme.spacing.md,
  },
  eventInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: theme.spacing.md,
    borderRadius: 16,
    alignItems: "center",
    gap: 12,
  },
  contentText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.neutral60,
  },
  ticketTypeContainer: {
    flexDirection: "row",
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.primary80,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    marginBottom: 6,
  },
  price: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary100,
    marginLeft: "auto",
  },
  bottomBar: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral20
  },
});

export default DetailEvent;