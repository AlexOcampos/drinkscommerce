import React, { useState, useContext } from "react";

import products from "./products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState(products);

  return (
    <AppContext.Provider value={{ drinks }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
