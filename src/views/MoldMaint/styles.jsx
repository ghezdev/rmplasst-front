import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: { backgroundColor: "#D9D9D9" },
  container: { padding: 20 },
  contentCard: { backgroundColor: "white", margin: 20, borderRadius: 20 },
  headerCard: {
    backgroundColor: "#3D4CD4",
    height: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  bodyCard: { paddingHorizontal: 20, paddingVertical: 10 },
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

  containerTextField: { marginBottom: 10 },
  titleTextField: {},
  dataTextField: {},

  containerCheckbox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10
  },
});
