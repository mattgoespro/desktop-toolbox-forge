import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/theme";
import { store } from "./store/store";
import { Router } from "./components/router/router";
import { RouterProvider } from "react-router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  );
}
