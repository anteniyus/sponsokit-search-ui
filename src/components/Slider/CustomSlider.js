import React, { forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { abbreviateNumber, formatWithComma } from "../../utility/NumberUtility";

const useStyles = makeStyles({
  container: {
    width: 320,
  },
  range: {
    fontSize: "10px",
  },
  slider: {
    paddingTop: "20px",
  },
});

const CustomSlider = forwardRef(({ scale, title }, ref) => {
  const classes = useStyles();

  const [value, setValue] = React.useState([10, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showRange = ` (Min: ${formatWithComma(
    scale(value[0])
  )} - Max: ${formatWithComma(scale(value[1]))})`;

  // To exposed to parent components
  useImperativeHandle(ref, () => ({
    getValues() {
      return { min: scale(value[0]), max: scale(value[1]) };
    },
  }));

  return (
    <div className={classes.container}>
      <Typography id="follower-count-slider" gutterBottom>
        {title}
        <span className={classes.range}>{showRange}</span>
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="follower-count-slider"
        scale={(x) => scale(x)}
        valueLabelFormat={(x) => formatWithComma(abbreviateNumber(x))}
        className={classes.slider}
      />
    </div>
  );
});

CustomSlider.propTypes = {
  scale: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomSlider;
