import { ChakraProvider, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./App.css";
import { Home } from "./components/pages/Home";
import { PokemonUrlProvider } from "./providers/PokemonUrlProvider";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PokemonUrlProvider>
        <Home />
      </PokemonUrlProvider>
    </ChakraProvider>
  );
}

export default App;
