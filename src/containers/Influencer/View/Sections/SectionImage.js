import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";
import notFound from "../../../../assets/images/profile-not-found-image.jpg";

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
  fallbackImg: {
    width: 160,
    objectFit: "cover",
  },
}));

const SectionImage = ({ mediaURL }) => {
  const classes = useStyles();

  const handleImageError = (event) => {
    event.target.className = classes.fallbackImg;
    event.target.src = notFound;
  };

  return (
    <div className={classes.cover}>
      <CardMedia
        component="img"
        height="160"
        className={classes.img}
        image={mediaURL}
        title="Influencer Profile Image"
        onError={handleImageError}
      />
    </div>
  );
};

SectionImage.defaultProps = {
  mediaURL: notFound,
};

SectionImage.propTypes = {
  mediaURL: PropTypes.string,
};

export default SectionImage;
