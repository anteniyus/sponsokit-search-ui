import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import { getInfluencers } from "../../../store/slice/influencerSlice";
import settings from "../../../settings.json";
import CustomSlider from "../../../components/Slider/CustomSlider";
import Header from "../../../components/Header/Header";
import { Colors } from "../../../constants/ColorPalette";
import CircularIndeterminate from "../../../components/Loading/CircularIndeterminate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "7px",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    width: "320px",
  },
  container: {
    marginBottom: theme.spacing(1),
  },
}));

const SearchForm = () => {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.influencers);
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const sliderRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const sliderValues = sliderRef.current.getValues();

    dispatch(
      getInfluencers({
        text: inputValue,
        followers: {
          min_count: sliderValues.min,
          max_count: sliderValues.max,
        },
      })
    );
  };

  const handleInputChange = (event) => setInputValue(event.target.value);

  return (
    <Card className={classes.container}>
      <Header
        title={settings.searchForm.headerText}
        width="90%"
        backgroundColor={Colors.DARK_GREEN}
        color={Colors.WHITE}
      />
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="text-field"
          label="Text Field"
          onChange={handleInputChange}
          className={classes.text}
        />

        <CustomSlider ref={sliderRef} />

        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            endIcon={isLoading ? <CircularIndeterminate /> : <SendIcon />}
            disabled={isLoading}
          >
            {settings.searchForm.submitButtonText}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SearchForm;
