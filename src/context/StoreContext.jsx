import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token,setToken] = useState("");
    const url = 'http://localhost:3000'

    const contextValue = {
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;