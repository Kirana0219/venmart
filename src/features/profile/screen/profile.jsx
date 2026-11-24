import React from "react";
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import theme from "../../../theme/theme";
import CustomButton from "../../../shared/components/customButton";
import CustomOptions from "../components/options";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <CustomOptions title="My Favorites" icon="heart" />
            <CustomOptions title="Transaction History" icon="history" />
            <CustomOptions
              title="Notification Settings"
              icon="bell"
              borderBottomWidth={0}
            />
          </View>
        </View>
        {/* End of Account & Activity Section */}

        {/* Start of Support & Policy Section */}
        <View style={styles.optionsContainer}>
          <Text style={styles.heading}>Support & Policy</Text>
          <View style={styles.optionsCard}>
            <CustomOptions title="Help Center" icon="help-circle" />
            <CustomOptions title="Terms & Conditions" icon="file-text" />
            <CustomOptions
              title="Privacy Policy"
              icon="shield-alert"
              borderBottomWidth={0}
            />
          </View>
        </View>
        {/* End of Account & Activity Section */}

        <CustomButton
          title="Log Out"
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
});

export default ProfileScreen;
