import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Colors } from "./constants/ColorPalette";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: Colors.DARK_GREEN,
      },
      secondary: {
        main: Colors.LIGHT_GREEN,
      },
    },
    typography: {
      fontSize: 12,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTheme;
