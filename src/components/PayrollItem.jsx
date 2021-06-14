import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, Card, CardItem, Body, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";

const PayrollItem = ({ idPayroll, idMachine, employee, dateCreated, firstButtonCall }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>{`Planilla ${idPayroll}`}</Text>
        <View style={styles.title}>
          <Text style={styles.machine}>Máquina:</Text>
          <Text style={styles.id}>{idMachine}</Text>
        </View>
        <Text>{employee}</Text>
        <Text style={styles.date}>{dateCreated}</Text>
      </View>
      <View style={styles.containerIcons}>
        <TouchableOpacity style={styles.button} onPress={firstButtonCall}>
          <Icon name="eye" type="Entypo" style={styles.buttonContent} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 0,
    borderTopWidth: 1,
    borderColor: "#BFBFBF",
    flexDirection: "row",
    //backgroundColor: 'red'
  },
  containerData: {
    //backgroundColor: 'blue',
    flex: 1,
  },
  containerIcons: {
    //backgroundColor: 'green',
    flexDirection: "row-reverse",
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  buttonContent: { color: "#232C77", paddingRight: 10 },
  title: {
    flexDirection: "row",
  },
  machine: {
    marginRight: 5,
    fontSize: 18,
  },
  id: {
    fontSize: 18,
  },
  date: {
    color: "#999999",
  },
});

// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696

export default PayrollItem;
