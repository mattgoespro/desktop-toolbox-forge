import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Router } from "./components/router/router";
import { store } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/theme";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
