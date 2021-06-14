import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Header, Icon } from "native-base";
import { Input } from "react-native-elements";

const InputGH = ({
  value,
  onChangeText,
  keyboardType,
  placeholder,
  label,
  error,
  multiline = false,
  numberOfLines,
}) => {
  const [a, setA] = useState();
  return (
    <View style={{ marginBottom: 10 }}>
      {label != undefined && (
        <Text style={{ fontSize: 16, color: "grey", fontWeight: "bold" }}>
          {label}
        </Text>
      )}
      <TextInput
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={{ borderBottomWidth: 1, height: multiline ? 80 : 40, fontSize: 18 }}
      />
      {error != undefined && (
        <Text style={{ color: "red", marginTop: 2, fontSize: 12 }}>
          {error ? "ESTE CAMPO ES OBLIGATORIO" : ""}
        </Text>
      )}
    </View>
  );
};

/*const styles = StyleSheet.create({
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
});*/

export default InputGH;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
