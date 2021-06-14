import React, { useState, useEffect, FunctionComponent } from "react";
import { View, Image } from "react-native";
import {
  Button,
  CardItem,
  Body,
  Icon,
  Container,
  Header,
  Content,
  Text,
} from "native-base";

import { CardButton, FooterGH } from "_components";

import { LOGO } from "_assets";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Header style={styles.header}>
        <Image source={LOGO} style={styles.headerLogo} />
        <Text style={styles.headerTitle}>
          Matricería e inyección de plásticos
        </Text>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <CardButton
          header="Mantenimiento de moldes"
          body={
            <Icon
              name="tools"
              type="FontAwesome5"
              style={styles.iconCardContent}
            />
          }
          footer="Ver todas las planillas"
          onPress={() => navigation.navigate("ListMoldMaintView")}
        />
        <CardButton
          header="Ficha personal"
          body={
            <Icon
              name="solution1"
              type="AntDesign"
              style={styles.iconCardContent}
            />
          }
          footer="Ver todas las planillas"
        />
        <CardButton
          header="Colocación del molde"
          body={
            <Icon name="funnel" type="Entypo" style={styles.iconCardContent} />
          }
          footer="Ver todas las planillas"
        />
        <CardButton
          header="Molinos"
          body={
            <Icon name="find" type="AntDesign" style={styles.iconCardContent} />
          }
          footer="Ver todas las planillas"
        />
      </Content>
      <FooterGH />
    </Container>
  );
}

export default Home;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
