import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { FooterGH, HeaderGH } from "_components";
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

import { styles } from "./styles";

const MoldMaint = ({ route, navigation }) => {
  const moldMaintenance = route.params;
  return (
    <Container>
      <HeaderGH
        buttonCallLeft={() => navigation.goBack()}
        title={`Planilla ${moldMaintenance.idPayroll}`}
      />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Mantenimiento de molde</Text>
          </View>
          <View style={styles.bodyCard}>
            <View style={styles.containerTextField}>
              <Text style={styles.titleField}>Responsable:</Text>
              <Text style={styles.dataField}>
                {moldMaintenance.nameEmployee}
              </Text>
            </View>
            <View style={styles.containerTextField}>
              <Text style={styles.titleField}>Máquina:</Text>
              <Text style={styles.dataField}>{moldMaintenance.idMachine}</Text>
            </View>
            <View style={styles.containerTextField}>
              <Text style={styles.titleField}>
                Mejoras para más rápida colocación:
              </Text>
              <Text style={styles.dataField}>
                {moldMaintenance.betterFasterPlacement}
              </Text>
            </View>
            <View style={styles.containerTextField}>
              <Text style={styles.titleField}>
                Reparaciones a mejorar en el molde:
              </Text>
              <Text style={styles.dataField}>
                {moldMaintenance.repairsImproveMold}
              </Text>
            </View>
            <View style={styles.containerTextField}>
              <Text style={styles.titleField}>Lugar guardado:</Text>
              <Text style={styles.dataField}>{moldMaintenance.placeSaved}</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Verificación</Text>
          </View>
          <View style={styles.bodyCard}>
            <View style={styles.containerCheckbox}>
              <Icon
                name={moldMaintenance.safeMounting ? "check-circle" : "circle"}
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Montaje seguro de los moldes
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={moldMaintenance.cleaning ? "check-circle" : "circle"}
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Limpieza del molde y la máquina
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={moldMaintenance.lubrication ? "check-circle" : "circle"}
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>Lubricación</Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={moldMaintenance.allInserts ? "check-circle" : "circle"}
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Comprobar todos los insertos
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.moldBaseControl ? "check-circle" : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Control de la base del molde
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.hotWashOperation ? "check-circle" : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Verificar funcionamiento colada caliente
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.coolingCircuit ? "check-circle" : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Circuito de enfriamiento (óxido)
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.changeConsumableComp
                    ? "check-circle"
                    : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Cambio de componentes consumibles
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.moldSurfaceCleaning
                    ? "check-circle"
                    : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Limpieza de superficies del molde
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.nozzleEntranceMaterial
                    ? "check-circle"
                    : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Verificar boquilla y entrada del material
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.centeredRingMold ? "check-circle" : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Verificar aro centrador del molde
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.reductionRingCentered
                    ? "check-circle"
                    : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Verificar reducción del aro centrador
              </Text>
            </View>
            <View style={styles.containerCheckbox}>
              <Icon
                name={
                  moldMaintenance.orderPossiblePartsMold
                    ? "check-circle"
                    : "circle"
                }
                type="Feather"
                style={{
                  color: "#3D4CD4",
                  fontSize: 25,
                  marginRight: 5,
                }}
              />
              <Text style={styles.titleField}>
                Dejar ordenado posibles piezas del molde
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Observaciones</Text>
          </View>
          <View style={styles.bodyCard}>
            <Text style={styles.dataField}>
              {moldMaintenance.observations || "No hay observaciones"}
            </Text>
          </View>
        </View>
      </Content>
      <FooterGH />
    </Container>
  );
};

export default MoldMaint;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
