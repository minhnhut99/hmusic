import React, { useContext, useReducer, createContext } from "react";
import "./DataLayer.scss";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider>{children}</DataLayerContext.Provider>
);
