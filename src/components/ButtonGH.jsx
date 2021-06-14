import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Input, CheckBox } from "react-native-elements";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

const ButtonGH = ({
  children,
  icon,
  onPress,
  disabled,
  loading,
  loadingText,
  placeholder,
  error,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "grey" : "#3D4CD4",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {loading ? (
        <>
          <ActivityIndicator size="large" color="white"/>
          <Text
            style={{
              marginLeft: 10,
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {loadingText}
          </Text>
        </>
      ) : (
        <>
          {icon}
          <Text
            style={{
              marginLeft: 10,
              color: disabled ? "#404040" : "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {children}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ButtonGH;
