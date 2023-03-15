import { ThemeProvider } from "styled-components";
import { BlogProvider } from "./context/BlogTransactions";
import { Home } from "./pages/Home/Home";
import { DefaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BlogProvider>
        <Home />

      </BlogProvider>
    </ThemeProvider>
  )
}
