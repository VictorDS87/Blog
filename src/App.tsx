import { ThemeProvider } from "styled-components";
import { BlogProvider } from "./context/BlogContext";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <BlogProvider>
        <Home />
      </BlogProvider>
    </ThemeProvider>
  )
}
