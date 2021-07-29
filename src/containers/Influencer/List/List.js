import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar, withSnackbar } from "notistack";
import CustomTable from "../../../components/Table/CustomTable";
import SearchForm from "./SearchForm";
import Container from "../../../components/Card/Container";
import { formatWithComma } from "../../../utility/NumberUtility";
import CustomDialog from "../../../components/Dialog/CustomDialog";
import InfluencerView from "../View/View";
import { setInfluencerViewData } from "../../../store/slice/InfluencerViewSlice";

const columns = [
  { title: "Channel Display Name", key: "channel_display_name" },
  { title: "Channel Name", key: "channel_name" },
  { title: "Media Count", key: "media_count" },
  { title: "Follower Count", key: "follower_count", function: formatWithComma },
];

const InfluencerList = () => {
  const { influencers, error } = useSelector((state) => state.influencers);
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error)
      enqueueSnackbar(error, {
        variant: "error",
      });
  }, [error]);

  const handleOpen = (influencerData) => {
    setOpen(true);
    dispatch(setInfluencerViewData(influencerData));
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
        <InfluencerView />
      </CustomDialog>
    </Container>
  );
};

export default withSnackbar(InfluencerList);
