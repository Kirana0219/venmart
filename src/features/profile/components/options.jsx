import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../../../theme/theme";
import { Lucide } from "@react-native-vector-icons/lucide";

const CustomOptions = ({ title, onPress, icon, borderBottomWidth = 1 }) => {
  return (
    <Pressable
      style={[styles.options, { borderBottomWidth }]}
      onPress={onPress}
    >
      {icon && <Lucide name={icon} style={styles.optionsIcon} />}
      <Text style={styles.text}>{title}</Text>
      <Lucide name="chevron-right" style={styles.arrowIcon}></Lucide>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
    padding: theme.spacing.lg,
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

export default CustomOptions;