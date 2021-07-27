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
    display: "flex",
    justifyContent: "center",
  },
  toolbar: {
    justifyContent: "center",
    backgroundColor: (props) =>
      props.backgroundColor
        ? props.backgroundColor
        : theme.palette.background.default,
  },
  title: {
    color: (props) => (props.color ? props.color : theme.palette.text.primary),
  },
  bar: {
    width: (props) => props.width,
  },
}));

const Header = ({ title, width, backgroundColor, color }) => {
  const classes = useStyles({ width, backgroundColor, color });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {
  width: "100%",
  backgroundColor: null,
  color: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default withTheme(Header);
