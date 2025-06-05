import { isRouteErrorResponse, Outlet } from "react-router";
import { Route } from "./+types/root";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/theme";
import { store } from "./store/store";
import { FlexBox } from "./shared/components/flex-box";
import Typography from "@mui/material/Typography";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <FlexBox direction="column" align="center" justify="center" gap={1}>
      <Typography variant="h2">{message}</Typography>
      <Typography variant="subtitle1">{details}</Typography>
      {stack && <Typography variant="body2">{stack}</Typography>}
    </FlexBox>
  );
}
