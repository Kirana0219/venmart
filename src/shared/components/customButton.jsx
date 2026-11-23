import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../../theme/theme";
import { Lucide } from "@react-native-vector-icons/lucide";

const CustomButton = ({
  title,
  onPress,
  icon,
  backgroundColor = theme.colors.primary100,
  color = theme.colors.white,
  style,
}) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      {icon && <Lucide name={icon} style={[styles.icon, { color }]} />}
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.lg,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.primary100,
    gap: theme.spacing.xs,
  },
  buttonText: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.white,
  },
  icon: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
  },
});

export default CustomButton;
