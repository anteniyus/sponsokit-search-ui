import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "../../../components/Table/CustomTable";
import SearchForm from "./SearchForm";
import Container from "../../../components/Card/Container";
import { formatWithComma } from "../../../utility/NumberUtility";

const columns = [
  { title: "Channel Name", key: "channel_name" },
  { title: "Channel Display Name", key: "channel_display_name" },
  { title: "Media Count", key: "media_count" },
  { title: "Follower Count", key: "follower_count", function: formatWithComma },
];

const InfluencerList = () => {
  const { influencers } = useSelector((state) => state.influencers);

  return (
    <Container>
      <SearchForm />
      <CustomTable data={influencers} columns={columns} />
    </Container>
  );
};

export default InfluencerList;
