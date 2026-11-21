import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../theme/theme";
import { Lucide } from "@react-native-vector-icons/lucide";

function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Lucide name="search" style={styles.icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary100,
    gap: theme.spacing.xs,
  },
  buttonText: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
  },
  icon: {
    color: "#fff",
    fontSize: theme.fontSizes.md,
  },
});

export default CustomButton;
