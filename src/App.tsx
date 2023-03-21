import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BlogProvider } from "./context/BlogContext";
import { Home } from "./pages/Home/Home";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <BlogProvider>
          <Router/>
        </BlogProvider>
      </BrowserRouter>
      
    </ThemeProvider>
  )
}
