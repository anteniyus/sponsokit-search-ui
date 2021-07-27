export const abbreviateNumber = (val) => {
  let newValue = val;
  if (val >= 1000) {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(`${val}`.length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum !== 0 ? val / 1000 ** suffixNum : val).toPrecision(precision)
      );
      const dotLessShortValue = `${shortValue}`.replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

export const formatWithComma = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
