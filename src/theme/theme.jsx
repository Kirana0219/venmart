const fontFamily = {
  thin: "Poppins_100Thin",
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semibold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
};

const colors = {
  // Primary
  primary100: "#6D28D9",
  primary80: "#8A53E1",
  primary60: "#A77EE8",
  primary40: "#C5A9F0",
  primary20: "#E2D4F7",

  // Neutral
  neutral100: "#1E1E1E",
  neutral90: "#333333",
  neutral80: "#474747",
  neutral70: "#5C5C5C",
  neutral60: "#707070",
  neutral50: "#858585",
  neutral40: "#999999",
  neutral30: "#B8B8B8",
  neutral20: "#D6D6DC",
  neutral10: "#F8F8FC",

  // Black & White
  white: "#fff",
  black: "#222",

  // Utilites
  // Danger
  danger100: "#EC221F",
  danger80: "#F04E4C",
  danger60: "#F47A79",
  danger40: "#F7A7A5",
  danger20: "#FBD3D2",

  // Positive
  positive100: "#14AE5C",
  positive80: "#43BE7D",
  positive60: "#72CE9D",
  positive40: "#A1DFBE",
  positive20: "#D0EFDE",

  // Warning
  warning100: "#E5A000",
  warning80: "#EAB333",
  warning60: "#EFC666",
  warning40: "#F5D999",
  warning20: "#FAECCC",

  // Info
  info100: "#157EFB",
  info80: "#4396FC",
  info60: "#71AEFC",
  info40: "#9FC6FD",
  info20: "#CFE3FE",
};

const theme = {
  fontFamily,
  colors,
  fontSizes: {
    xxl: 32,
    xl: 28,
    lg: 24,
    md: 20,
    body: 16,
    sm: 14,
    xs: 12,
    xxs: 10,
    xxxs: 8,
  },
  spacing: {
    none: 0,
    xxs: 4,
    xs: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 28,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },
};

export default theme;
