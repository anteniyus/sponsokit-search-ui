import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const SectionInfo = ({ channelDisplayName, channelName }) => (
  <div>
    <Typography component="h5" variant="h5" data-testid="ch-dis-name-testid">
      {channelDisplayName}
    </Typography>
    <Typography
      variant="subtitle1"
      color="textSecondary"
      data-testid="ch-name-testid"
    >
      {`@${channelName || ""}`}
    </Typography>
  </div>
);

SectionInfo.propTypes = {
  channelDisplayName: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default SectionInfo;
