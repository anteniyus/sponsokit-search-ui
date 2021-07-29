import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  root: {
    height: "1.2rem !important",
    width: "1.2rem !important",
  },
}));

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress color="secondary" className={classes.root} />
    </div>
  );
};

export default CircularIndeterminate;
