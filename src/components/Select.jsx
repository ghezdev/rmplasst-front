import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Label, Item, Picker, Icon } from "native-base";

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder,
  error,
  style,
}) {
  return (
    <View style={{ ...style }}>
      {label && (
        <Text
          style={{
            fontSize: 16,
            color: "grey",
            fontWeight: "bold",
            marginTop: 4,
          }}
        >
          {label}
        </Text>
      )}
      <View style={{ borderBottomWidth: 1 }}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          placeholder={placeholder}
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={value}
          onValueChange={onChange}
          style={{ height: 40 }}
        >
          {options.map((option, index) => {
            return <Picker.Item key={index} label={option} value={option} />;
          })}
        </Picker>
      </View>
      {error != undefined && (
        <Text style={{ color: "red", marginTop: 2, fontSize: 12 }}>
          {error ? "ESTE CAMPO ES OBLIGATORIO" : ""}
        </Text>
      )}
    </View>
  );
}
