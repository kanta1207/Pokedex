import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { PokemonTypeArrProvider } from "./providers/PokemonTypeArrProvider";
import { PokemonUrlProvider } from "./providers/PokemonUrlProvider";
import { Router } from "./router/Router";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PokemonUrlProvider>
        <PokemonTypeArrProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PokemonTypeArrProvider>
      </PokemonUrlProvider>
    </ChakraProvider>
  );
}

export default App;
