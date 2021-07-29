import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider, Hidden } from "@material-ui/core";
import { useSelector } from "react-redux";
import SectionCount from "./Sections/SectionCount";
import SectionInfo from "./Sections/SectionInfo";
import SectionBiography from "./Sections/SectionBiography";
import SectionImage from "./Sections/SectionImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  content: {
    width: "100%",
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const InfluencerView = () => {
  const classes = useStyles();

  const { data } = useSelector((state) => state.influencerView);

  return (
    <Card className={classes.root}>
      <SectionImage mediaURL={data.media_url} />

      <CardContent className={classes.content}>
        <div className={classes.introduction}>
          <SectionInfo
            channelDisplayName={data.channel_display_name}
            channelName={data.channel_name}
          />

          <Hidden smUp>
            <Divider />
          </Hidden>

          <SectionCount
            mediaCount={data.media_count}
            followerCount={data.follower_count}
            followingCount={data.following_count}
          />
        </div>

        <Divider />

        <SectionBiography text={data.biography} />
      </CardContent>
    </Card>
  );
};

export default InfluencerView;
