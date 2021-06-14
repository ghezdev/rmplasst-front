import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { PayrollItem, FooterGH } from "_components";
import { Text, Button } from "native-base";
import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";

import { styles } from "../styles";
import axios from "axios";

const ListPlanilla = () => {
  const navigation = useNavigation();

  const [listMoldMaint, setListMoldMaint] = useState({
    data: [],
    loading: false,
    error: false,
  });

  const callGetMaintenanceMold = async () => {
    setListMoldMaint({ data: [], loading: true, error: false });
    await axios
      .get("http://10.0.2.2:3000/moldMaintenance")
      .then((res) => {
        console.log("GET MaintenanceMold Success!");
        setListMoldMaint({
          data: res.data.data,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log("GET MaintenanceMold ERROR!", error);
        setListMoldMaint({ data: [], loading: false, error: true });
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      callGetMaintenanceMold();
    });
    return unsubscribe;
  }, []);

  return listMoldMaint.loading ? (
    <ActivityIndicator size="large" color="#232C77" />
  ) : listMoldMaint.data.length > 0 && !listMoldMaint.error ? (
    <>
      {listMoldMaint.data.map((maintenanceMold, index) => (
        <PayrollItem
          key={index}
          idPayroll={listMoldMaint.data.length - index}
          idMachine={maintenanceMold.idMachine}
          employee={maintenanceMold.nameEmployee}
          dateCreated={maintenanceMold.createdDate}
          firstButtonCall={() =>
            navigation.navigate("MoldMaintView", {
              ...maintenanceMold,
              idPayroll: listMoldMaint.data.length - index,
            })
          }
        />
      ))}
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          borderTopWidth: 1,
          borderColor: "#BFBFBF",
        }}
      >
        <Button block style={{ marginHorizontal: 20 }}>
          <Text>Cargar más</Text>
        </Button>
      </View>
    </>
  ) : listMoldMaint.data.length == 0 ? (
    <View style={{alignItems: 'center'}}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
        No hay planillas todavía.
      </Text>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
        Agregue una para poder verla acá!
      </Text>
    </View>
  ) : (
    <Text>ERROR</Text>
  );
};

export default ListPlanilla;
// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
