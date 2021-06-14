import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Alert, View } from "react-native";
import { PayrollItem, FooterGH, HeaderGH } from "_components";
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
  Item,
  Input,
  Textarea,
  Card,
  CardItem,
} from "native-base";

import ListPlanilla from "./ListPlanilla";
import { styles } from "./styles";

const ListMoldMaint = ({ navigation }) => {
  return (
    <Container>
      <HeaderGH buttonCallLeft={() => navigation.goBack()} title="Planillas" />
      <Content>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Manteninimiento de moldes</Text>
          <View style={{flex: 1, flexDirection: 'row-reverse'}}> 
            <TouchableOpacity
              style={styles.titleBttn}
              onPress={() => navigation.navigate("FormMoldMaintView")}
            >
              <Icon
                name="addfile"
                type="AntDesign"
                style={styles.titleIconBttn}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ListPlanilla />
      </Content>
      <FooterGH />
    </Container>
  );
};

export default ListMoldMaint;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
