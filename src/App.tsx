import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./themes/global";
import { defaultTheme } from "./themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
