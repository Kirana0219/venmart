import React from "react";
import { Pressable, StyleSheet, ScrollView, Text, View } from "react-native";
import theme from "../../../theme/theme";
import { Image } from "react-native";
import CustomButton from "../../../components/customButton";
import Lucide from "@react-native-vector-icons/lucide";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Start of Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.identity}>
            <Image
              source={require("../../../../assets/woman.png")}
              style={{ width: 70, height: 70 }}
            />

            <View>
              <Text style={styles.title}>Kim Minji</Text>
              <Text style={styles.subtitle}>KimMinji123@gmail.com</Text>
            </View>
          </View>

          <CustomButton
            title="Edit Profile"
            icon="pencil"
            backgroundColor={theme.colors.primary20}
            color={theme.colors.primary100}
            onPress={() => router.navigate("/profile/edit")}
          />
        </View>
        {/* End of Profile Card */}

        {/* Start of Account & Activity Section */}
        <View style={styles.optionsContainer}>
          <Text style={styles.heading}>Acount & Activity</Text>
          <View style={styles.optionsCard}>
            <Pressable style={styles.options}>
              <Lucide name="heart" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>My Favorites</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
            <Pressable style={styles.options}>
              <Lucide name="history" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>Transaction History</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
            <Pressable style={[styles.options, { borderBottomWidth: 0 }]}>
              <Lucide name="bell" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>Notification Settings</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
          </View>
        </View>
        {/* End of Account & Activity Section */}

        {/* Start of Support & Policy Section */}
        <View style={styles.optionsContainer}>
          <Text style={styles.heading}>Support & Policy</Text>
          <View style={styles.optionsCard}>
            <Pressable style={styles.options}>
              <Lucide name="help-circle" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>Help Center</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
            <Pressable style={styles.options}>
              <Lucide name="file-text" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>Terms & Conditions</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
            <Pressable style={[styles.options, { borderBottomWidth: 0 }]}>
              <Lucide name="shield-alert" style={styles.optionsIcon}></Lucide>
              <Text style={styles.text}>Privacy Policy</Text>
              <Lucide name="arrow-right" style={styles.arrowIcon}></Lucide>
            </Pressable>
          </View>
        </View>
        {/* End of Account & Activity Section */}

        <CustomButton
          title="Edit Profile"
          icon="log-out"
          backgroundColor={theme.colors.danger20}
          color={theme.colors.danger100}
        />
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
  profileCard: {
    backgroundColor: theme.colors.neutral10,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: theme.colors.neutral20,
  },
  identity: {
    flexDirection: "row",
    gap: theme.spacing.lg,
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.black,
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.neutral40,
  },
  heading: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.body,
    lineHeight: theme.fontSizes.xxl,
    color: theme.colors.neutral60,
  },
  optionsContainer: {
    gap: 8,
  },
  optionsCard: {
    borderWidth: 1,
    borderRadius: theme.radius.xl,
    borderColor: theme.colors.neutral20,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderColor: theme.colors.neutral20,
  },
  optionsIcon: {
    color: theme.colors.primary100,
    fontSize: theme.fontSizes.body,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.neutral80,
    lineHeight: theme.fontSizes.lg,
  },
  arrowIcon: {
    marginLeft: "auto",
    color: theme.colors.neutral40,
    fontSize: theme.fontSizes.body,
  },
});

export default ProfileScreen;