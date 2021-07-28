import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    background: "transparent",
  },
  dialogContent: {
    padding: "24px",
  },
}));

const CustomDialog = (props) => {
  const { onClose, open, children } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="Social Media"
      open={open}
      fullWidth
      classes={{ paper: classes.paper }}
    >
      <DialogContent className={classes.dialogContent}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default CustomDialog;
