import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { abbreviateNumber } from "../../../../utility/NumberUtility";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  infoSpan: { margin: theme.spacing(0.7), textAlign: "center" },
}));

const SectionCount = ({ mediaCount, followerCount, followingCount }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.infoSpan}>
        <span>{abbreviateNumber(mediaCount)}</span>
        <Typography variant="caption" component="p">
          posts
        </Typography>
      </span>

      <span className={classes.infoSpan}>
        <span>{abbreviateNumber(followerCount)}</span>
        <Typography variant="caption" component="p">
          follower
        </Typography>
      </span>

      <span className={classes.infoSpan}>
        <span>{abbreviateNumber(followingCount)}</span>
        <Typography variant="caption" component="p">
          following
        </Typography>
      </span>
    </div>
  );
};

SectionCount.propTypes = {
  mediaCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
};

export default SectionCount;
