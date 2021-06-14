import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: { justifyContent: "flex-start", alignItems: "center" },
  headerBackBttn: { width: "10%", marginLeft: 5 },
  headerIconBttn: { color: "white" },
  headerTextContainer: { width: "80%", marginLeft: 10 },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  headerBttnEnd: { width: "10%" },
  titleContainer: { padding: 10, flexDirection: "row", width: "100%" },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleBttn: {
    backgroundColor: "#3745BF",
    borderRadius: 5,
    justifyContent: "center",
  },
  titleIconBttn: { color: "white", paddingLeft: 5, paddingRight: 4 },
  
});
