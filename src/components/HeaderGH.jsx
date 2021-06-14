import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Header, Icon, Text } from "native-base";

const HeaderGH = ({buttonCallLeft, title}) => {
  return (
    <Header style={styles.header}>
      <View style={styles.headerBackBttn}>
        <TouchableOpacity onPress={buttonCallLeft}>
          <Icon
            name="arrow-back"
            type="Ionicons"
            style={styles.headerIconBttn}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerBttnEnd}></View>
    </Header>
  );
};

const styles = StyleSheet.create({
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
});

export default HeaderGH;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
