import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const SectionBiography = ({ text }) => (
  <Typography variant="body1" align="justify">
    {text}
  </Typography>
);

SectionBiography.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionBiography;
