import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";

const EditProfile = () => {
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: "Edit Profile",
        }}
      />

      <View>
        <Text>Hai</Text>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
