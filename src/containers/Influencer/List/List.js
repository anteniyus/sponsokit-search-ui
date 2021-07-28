import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomTable from "../../../components/Table/CustomTable";
import SearchForm from "./SearchForm";
import Container from "../../../components/Card/Container";
import { formatWithComma } from "../../../utility/NumberUtility";
import CustomDialog from "../../../components/Dialog/CustomDialog";
import InfluencerView from "../View/View";

const columns = [
  { title: "Channel Display Name", key: "channel_display_name" },
  { title: "Channel Name", key: "channel_name" },
  { title: "Media Count", key: "media_count" },
  { title: "Follower Count", key: "follower_count", function: formatWithComma },
];

const InfluencerList = () => {
  const { influencers } = useSelector((state) => state.influencers);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const handleOpen = (influencerData) => {
    setOpen(true);
    setData(influencerData);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <SearchForm />
      <CustomTable
        data={influencers}
        columns={columns}
        onRowClick={handleOpen}
      />

      <CustomDialog onClose={handleClose} open={open}>
        <InfluencerView data={data} />
      </CustomDialog>
    </Container>
  );
};

export default InfluencerList;
