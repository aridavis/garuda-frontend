export const numberToString = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const stringToNumber = (str) => {
  try {
    if (str.replace(/,/g, "") === "") {
      return 0;
    }
    return isNaN(parseInt(str.replace(/,/g, "")))
      ? 0
      : parseInt(str.replace(/,/g, ""));
  } catch {
    return 0;
  }
};
