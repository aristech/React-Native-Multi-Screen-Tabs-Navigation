module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: [2, "double", {avoidEscape: true}],
    "react-native/no-inline-styles": 0,
  },
  globals: {
    fetch: false,
  },
};
