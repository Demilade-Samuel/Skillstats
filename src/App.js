import { ThemeProvider } from "styled-components";
import { Global, theme } from "./base";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />

      <Home />
    </ThemeProvider>
  );
}

export default App;
