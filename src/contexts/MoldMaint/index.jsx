import React, { useEffect, useState, useContext } from "react";
import { ActivityIndicator, Text } from "react-native";
import axios from "axios";

const MoldMaintContext = React.createContext({
  listMoldMaint: {
    data: [],
    loading: false,
    error: false,
  },
});

const MoldMaintProvider = ({ children }) => {
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
    callGetMaintenanceMold();
  }, []);

  return (
    <MoldMaintContext.Provider value={{ listMoldMaint }}>
      {listMoldMaint.loading ? <ActivityIndicator /> : children}
    </MoldMaintContext.Provider>
  );
};

const useMoldMaint = () => {
  const context = useContext(MoldMaintContext);
  if (context === undefined) {
    throw new Error("Error en contexto MoldMaint");
  }
  return context;
};

export { MoldMaintContext, MoldMaintProvider, useMoldMaint };
