import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
import * as Font from "expo-font";
import {
  CheckBoxWText,
  Select,
  FooterGH,
  HeaderGH,
  InputGH,
  ButtonGH,
} from "_components";
import { Input, CheckBox, Overlay } from "react-native-elements";
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
  //Input,
  Textarea,
} from "native-base";
import axios from "axios";
import dayjs from "dayjs";

import { styles } from "./styles";

const listCheckbox = {
  1: "Montaje seguro de los moldes",
  2: "Limpieza del molde y la máquina",
  3: "Lubricación",
  4: "Comprobar todos los insertos",
  5: "Control de la base del molde",
  6: "Verificar funcionamiento colada caliente",
  7: "Circuito de enfriamiento (óxido)",
  8: "Cambio de componentes consumibles",
  9: "Limpieza de superficies del molde",
  10: "Verificar boquilla y entrada de material",
  11: "Verificar aro centrador del molde",
  12: "Verificar reducción del aro centrador",
  13: "Dejar ordenado posibles piezas del molde",
};

const optionsSelectRow = [
  "Fila A",
  "Fila B",
  "Fila C",
  "Fila D",
  "Fila E",
  "Fila F",
  "Fila G",
  "Fila H",
];
const optionsSelectFall = ["Piso 1", "Piso 2", "Piso 3", "Piso 4", "Piso 5"];

const FormMoldMaint = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState({
    open: false,
    msg: "",
    icon: "",
  });
  const [disableButton, setDisableButton] = useState(true);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [checkBox5, setCheckBox5] = useState(false);
  const [checkBox6, setCheckBox6] = useState(false);
  const [checkBox7, setCheckBox7] = useState(false);
  const [checkBox8, setCheckBox8] = useState(false);
  const [checkBox9, setCheckBox9] = useState(false);
  const [checkBox10, setCheckBox10] = useState(false);
  const [checkBox11, setCheckBox11] = useState(false);
  const [checkBox12, setCheckBox12] = useState(false);
  const [checkBox13, setCheckBox13] = useState(false);
  const [idMachine, setIdMachine] = useState("");
  const [nameEmployee, setNameEmployee] = useState("");
  const [inputBetters, setInputBetters] = useState("");
  const [inputRepairs, setInputRepairs] = useState("");
  const [selectPlaceRow, setSelectPlaceRow] = useState(optionsSelectRow[0]);
  const [selectPlaceFall, setSelectPlaceFall] = useState(optionsSelectFall[0]);
  const [observations, setObservations] = useState("");

  const sendForm = async () => {
    setLoading(true);
    let msgModal = "";
    let response = "";
    const body = {
      safeMounting: checkBox1,
      cleaning: checkBox2,
      lubrication: checkBox3,
      allInserts: checkBox4,
      moldBaseControl: checkBox5,
      hotWashOperation: checkBox6,
      coolingCircuit: checkBox7,
      changeConsumableComp: checkBox8,
      moldSurfaceCleaning: checkBox9,
      nozzleEntranceMaterial: checkBox10,
      centeredRingMold: checkBox11,
      reductionRingCentered: checkBox12,
      orderPossiblePartsMold: checkBox13,
      idMachine: idMachine,
      nameEmployee: nameEmployee,
      betterFasterPlacement: inputBetters,
      repairsImproveMold: inputRepairs,
      placeSaved: selectPlaceRow + " " + selectPlaceFall,
      observations: observations,
      createdDate: dayjs().format("YYYY-MM-DD HH:mm"),
    };
    await axios
      .post("http://10.0.2.2:3000/moldMaintenance", body)
      .then((res) => {
        response = "success";
        msgModal = "Planilla enviada correctamente!";
      })
      .catch((res) => {
        response = "error";
        msgModal = "Error enviando la planilla, intente nuevamente";
      });
    setLoading(false);
    setDataModal({ open: true, msg: msgModal, icon: response });
    setTimeout(() => setDataModal({ open: false, ...dataModal }), 3000);
  };

  useEffect(() => {
    if (
      !idMachine ||
      nameEmployee == "" ||
      selectPlaceRow == "" ||
      selectPlaceFall == ""
    ) {
      if (disableButton == false) setDisableButton(true);
    } else {
      if (disableButton == true) setDisableButton(false);
    }
  }, [idMachine, nameEmployee, selectPlaceRow, selectPlaceFall]);

  return (
    <Container>
      <HeaderGH
        buttonCallLeft={() => navigation.goBack()}
        title={`Nueva planilla`}
      />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Mantenimiento de molde</Text>
          </View>
          <View style={styles.bodyCard}>
            <InputGH
              value={nameEmployee}
              placeholder="Nombre y apellido"
              label="Nombre y apellido del responsable"
              error={!nameEmployee}
              onChangeText={(value) => setNameEmployee(value)}
            />
            <InputGH
              value={idMachine}
              placeholder="Máquina"
              label="Número de máquina"
              keyboardType="numeric"
              error={!idMachine}
              onChangeText={(value) => setIdMachine(value)}
            />
            <InputGH
              value={inputBetters}
              placeholder="Mejoras"
              label="Mejoras para más rápida colocación"
              onChangeText={(value) => setInputBetters(value)}
            />
            <InputGH
              value={inputRepairs}
              placeholder="Reparaciones"
              label="Reparaciones a mejorar en el molde"
              onChangeText={(value) => setInputRepairs(value)}
            />
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Lugar guardado
            </Text>
            <Select
              value={selectPlaceRow}
              options={optionsSelectRow}
              onChange={(value) => setSelectPlaceRow(value)}
              style={{ marginBottom: 10 }}
            />
            <Select
              value={selectPlaceFall}
              options={optionsSelectFall}
              onChange={(value) => setSelectPlaceFall(value)}
              style={{ marginBottom: 10 }}
            />
          </View>
        </View>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Verificación</Text>
          </View>
          <View style={styles.bodyCard}>
            <CheckBox
              title={listCheckbox[1]}
              checked={checkBox1}
              onPress={() => setCheckBox1(!checkBox1)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[2]}
              checked={checkBox2}
              onPress={() => setCheckBox2(!checkBox2)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[3]}
              checked={checkBox3}
              onPress={() => setCheckBox3(!checkBox3)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[4]}
              checked={checkBox4}
              onPress={() => setCheckBox4(!checkBox4)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[5]}
              checked={checkBox5}
              onPress={() => setCheckBox5(!checkBox5)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[6]}
              checked={checkBox6}
              onPress={() => setCheckBox6(!checkBox6)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[7]}
              checked={checkBox7}
              onPress={() => setCheckBox7(!checkBox7)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[8]}
              checked={checkBox8}
              onPress={() => setCheckBox8(!checkBox8)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[9]}
              checked={checkBox9}
              onPress={() => setCheckBox9(!checkBox9)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[10]}
              checked={checkBox10}
              onPress={() => setCheckBox10(!checkBox10)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[11]}
              checked={checkBox11}
              onPress={() => setCheckBox11(!checkBox11)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[12]}
              checked={checkBox12}
              onPress={() => setCheckBox12(!checkBox12)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
            <CheckBox
              title={listCheckbox[13]}
              checked={checkBox13}
              onPress={() => setCheckBox13(!checkBox13)}
              containerStyle={{ padding: 0, borderWidth: 0, marginBottom: 20, backgroundColor: 'transparent' }}
              textStyle={{ fontSize: 16 }}
              checkedColor="#3D4CD4"
            />
          </View>
        </View>
        <View style={styles.contentCard}>
          <View style={styles.headerCard}>
            <Text style={styles.titleGroup}>Observaciones</Text>
          </View>
          <View style={styles.bodyCard}>
            <InputGH
              value={observations}
              placeholder="Observaciones"
              onChangeText={(value) => setObservations(value)}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <ButtonGH
            disabled={disableButton}
            loading={loading}
            loadingText="Enviando planilla..."
            icon={
              <Icon
                name="file-send-outline"
                type="MaterialCommunityIcons"
                style={{
                  color: disableButton ? "#404040" : "white",
                  fontSize: 35,
                }}
              />
            }
            onPress={sendForm}
          >
            Enviar planilla
          </ButtonGH>
        </View>
      </Content>
      <FooterGH />
      <Overlay isVisible={dataModal.open}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 150,
          }}
        >
          {dataModal.icon == "success" ? (
            <Icon
              name="check-circle"
              type="Feather"
              style={{ color: "#46C764", fontSize: 80, marginBottom: 10 }}
            />
          ) : (
            <Icon
              name="alert-circle"
              type="Feather"
              style={{ color: "red", fontSize: 80, marginBottom: 10 }}
            />
          )}
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {dataModal.msg}
          </Text>
        </View>
      </Overlay>
    </Container>
  );
};

export default FormMoldMaint;

// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
