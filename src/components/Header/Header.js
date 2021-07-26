import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withTheme(Header);
