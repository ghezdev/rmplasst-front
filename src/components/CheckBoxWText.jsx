import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, CheckBox, Body, Text } from "native-base";
import * as Font from "expo-font";

export default function CheckBoxWText({ text, state, updateState }) {
  return (
    <ListItem style={{borderBottomWidth: 0, borderColor: 'none', }}>
      <CheckBox checked={state} onPress={() => updateState(!state)} />
      <Body>
        <Text>{text}</Text>
      </Body>
    </ListItem>
  );
}
