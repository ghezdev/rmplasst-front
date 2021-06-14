import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: { backgroundColor: "#D9D9D9" },
  contentTitle: {
    marginLeft: 18,
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 15,
  },
  inputLabel: { marginBottom: 10 },
  containerBttnSend: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  bttnSend: { backgroundColor: "#232C77" },
  contentBttnSend: { color: "white" },
  contentCard: { backgroundColor: "white", margin: 20, borderRadius: 20 },
  headerCard: {
    backgroundColor: "#3D4CD4",
    height: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  bodyCard: { paddingHorizontal: 10, paddingVertical: 20 },
  title: { fontSize: 25, fontWeight: "bold", marginBottom: 20 },
  titleGroup: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    paddingTop: 8,
    paddingLeft: 20,
  },
  containerField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 5,
  },
  titleField: {
    fontSize: 18,
    color: "#595858",
    marginRight: 5,
  },
  dataField: { fontSize: 20 },
});
