import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getInfluencers } from "../../../store/slice/influencerSlice";
import settings from "../../../settings.json";
import CustomSlider from "../../../components/Slider/CustomSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SearchForm = () => {
  const classes = useStyles();
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
      />

      <CustomSlider ref={sliderRef} />

      <Button variant="contained" color="primary" size="small" type="submit">
        {settings.searchForm.submitButtonText}
      </Button>
    </form>
  );
};

export default SearchForm;
