import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, Card, CardItem, Body, Icon } from "native-base";

export default function CardButton({ header, body, footer, onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity onPress={() => onPress()}>
        <Card style={{ width: 300 }}>
          <CardItem header style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20 }}>{header}</Text>
          </CardItem>
          <CardItem cardBody style={{ justifyContent: "center" }}>
            {body}
          </CardItem>
          <CardItem footer style={{ justifyContent: "center" }}>
            <Text>{footer}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
