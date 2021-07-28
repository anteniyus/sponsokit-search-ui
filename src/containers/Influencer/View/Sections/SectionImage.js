import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cover: {
    display: "flex",
    width: 160,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "center",
      paddingTop: theme.spacing(1),
    },
  },
  img: {
    width: 160,
  },
}));

const SectionImage = ({ mediaURL }) => {
  const classes = useStyles();

  return (
    <div className={classes.cover}>
      <CardMedia
        component="img"
        height="160"
        className={classes.img}
        image={mediaURL}
        title="Influencer Profile Image"
      />
    </div>
  );
};

SectionImage.propTypes = {
  mediaURL: PropTypes.string.isRequired,
};

export default SectionImage;
