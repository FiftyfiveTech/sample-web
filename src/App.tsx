import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { TidingsProvider } from "sample-storybook";
import { Tidings } from "./components";
import { CloseButtonForTidings } from "@components/Tidings";

function App() {
  const TidingsProviderRef = React.useRef(null);
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <TidingsProvider
              ref={TidingsProviderRef}
              action={CloseButtonForTidings}
              autoHideDuration={3000}
            >
              <Tidings />
              <AppRoutes />
            </TidingsProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
