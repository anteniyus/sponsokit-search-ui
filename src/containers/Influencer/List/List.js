import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CustomTable from "../../../components/Table/CustomTable";
import SearchForm from "./SearchForm";

const useStyles = makeStyles({
  container: {
    padding: "7px",
  },
});

const columns = [
  { title: "Channel Name", key: "channel_name" },
  { title: "Channel Display Name", key: "channel_display_name" },
  { title: "Media Count", key: "media_count" },
];

const InfluencerList = () => {
  const classes = useStyles();
  const { influencers } = useSelector((state) => state.influencers);

  return (
    <div className={classes.container}>
      <SearchForm />
      <Divider />
      <CustomTable data={influencers} columns={columns} />
    </div>
  );
};

export default InfluencerList;
