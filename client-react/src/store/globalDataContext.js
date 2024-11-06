import { createContext, useState } from "react";

// later, this will contain the tuple [favorites,setFavorites] as value
const GlobalDataContext = createContext(null)

export default GlobalDataContext