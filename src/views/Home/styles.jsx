import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#232C77",
    borderBottomWidth: 1,
  },
  headerLogo: { width: 50, height: 50, resizeMode: "stretch" },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#737372",
  },
  content: { backgroundColor: "#D9D9D9" },
  iconCardContent: { fontSize: 150, width: 150 },
});
