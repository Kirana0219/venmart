import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../theme/theme";
import { Lucide } from "@react-native-vector-icons/lucide";

function CustomButton({ title, onPress, icon, backgroundColor = theme.colors.primary100, color = theme.colors.white}) {
  return (
    <Pressable style={[styles.button, {backgroundColor}]} onPress={onPress}>
      {icon && <Lucide name={icon} style={[styles.icon, {color}]}/>}
      <Text style={[styles.buttonText, {color}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary100,
    gap: theme.spacing.xs,
  },
  buttonText: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.white,
  },
  icon: {
    color: "#fff",
    fontSize: theme.fontSizes.md,
  },
});

export default CustomButton;