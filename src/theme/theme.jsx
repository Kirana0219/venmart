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
  neutral100: "#131218",
  neutral90: "#1D1C25",
  neutral80: "#272631",
  neutral70: "#343341",
  neutral60: "#3E3D4D",
  neutral50: "#53526A",
  neutral40: "#757494",
  neutral30: "#9C9AC1",
  neutral20: "#CBC9EF",
  neutral10: "#E8E7FF",

  // Black & White
  white: "#fff",
  black: "#222",

  // Utilites
  danger: "#E7002A",
  positive: "#3EC55F",
  warning: "#FECB2F",
  info: "#157EFB",
};

const theme = {
  fontFamily,
  colors,
  fontSizes: {
    xxl: 32,
    xl: 28,
    lg: 24,
    md: 20,
    body: 17,
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
