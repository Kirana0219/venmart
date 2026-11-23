import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import theme from "../../../theme/theme";
import CustomInputs from "../components/inputs";
import CustomButton from "../../../shared/components/customButton";
import Lucide from "@react-native-vector-icons/lucide";

const EditProfile = () => {
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: "Edit Profile",
        }}
      />

      <View style={styles.container}>
        {/* Start of edit profile photo  */}
        <View style={styles.photoContainer}>
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../../../assets/woman.png")}
              style={{ width: 90, height: 90 }}
            />
            <Pressable style={styles.editPhotoButton}>
              <Lucide name="camera" size={18} color={theme.colors.white} />
            </Pressable>
          </View>
          <Text style={styles.heading}>Change Photo</Text>
        </View>
        {/* End of edit profile photo  */}

        {/* Start of inputs form */}
        <CustomInputs title="Full Name" text="Kim Minji" />
        <CustomInputs title="Username" text="@kiminji" />
        <CustomInputs title="Email Address" text="KimMinji@gmail.com" />
        <CustomInputs title="phone Number" text="+62 812-9482-3310" />
        <CustomInputs title="City" text="Jakarta, Indonesia" />
        {/* End of inputs form */}

        {/* Start of bottom action bar*/}
        <View style={styles.bottomBar}>
          <CustomButton
            title="Cancle Changes"
            backgroundColor={theme.colors.neutral10}
            color={theme.colors.neutral100}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: theme.colors.neutral20,
              paddingVertical: theme.spacing.md,
            }}
          />
          <CustomButton
            title="Save Changes"
            style={{ flex: 1, paddingVertical: theme.spacing.md }}
          />
        </View>
        {/* End of bottom action bar*/}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: 18,
    gap: 24,
    backgroundColor: theme.colors.white,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.body,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.primary100,
  },
  bottomBar: {
    flexDirection: "row",
    gap: 8,
    marginTop: 52,
  },
  editPhotoButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
});

export default EditProfile;
