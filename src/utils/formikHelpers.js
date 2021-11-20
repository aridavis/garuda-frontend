export const setFormikErrors = (errorObject, setErrorFunction) => {
  const errors = Object.keys(errorObject);
  console.log(errors);
  console.log(errorObject);
  errors.map((item) => {
    let toReplace = item;
    if (item.split(".").length === 3) {
      const three = item.split(".")[2];
      toReplace = three.replaceAll(/_/g, " ");
    }
    return setErrorFunction(
      item,
      errorObject[item]
        .join("\r\n")
        .replace(item.replaceAll(/_/g, " "), toReplace)
    );
  });
};
