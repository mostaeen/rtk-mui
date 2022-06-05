import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store/store";

import App from "./app";
import { deepPurple, grey, lightBlue } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[700]
    },
    secondary: {
      main: deepPurple[900]
    },
    text: {
      primary: grey[50],
      secondary: grey[100]
    },
    tonalOffset: 0.2
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        style: {
          transition: "background-color 0.5s ease-in"
        }
      }
    },
    MuiButtonGroup: {
      defaultProps: {
        variant: "contained"
      }
    },
    MuiTypography: {
      defaultProps: {
        style: {
          textAlign: "center"
        }
      }
    }
  },
  typography: {
    fontFamily: "sans-serif",
    h2: {
      fontWeight: 800
    }
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  rootElement
);
