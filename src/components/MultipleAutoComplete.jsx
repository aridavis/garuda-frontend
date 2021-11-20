import React, { useEffect, useState } from "react";
import { Autocomplete as MaterialAutocomplete } from "@mui/lab";
import { CircularProgress, TextField } from "@mui/material";
import ApiClient from "../utils/ApiClient";
var timeout;

const MultipleAutocomplete = (props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  const [text, setText] = useState("");

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (
      props.value === "" ||
      props.value === undefined ||
      props.value === null ||
      props.value.length === 0
    ) {
      setSelected([]);
    }
  }, [props.value]);

  return (
    <MaterialAutocomplete
      multiple
      disableClearable
      inputValue={text}
      value={selected}
      onInputChange={(e, v) => {
        setText(v);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (v.length > 0) {
            setLoading(true);
            ApiClient.Post(props.async.url, [], {
              text: v,
              selected: props.value,
            }).then((res) => {
              setOptions(
                res.data.map((d) => ({
                  id: d[props.async.valueKey],
                  text: d[props.async.textKey],
                }))
              );
              setLoading(false);
            });
          }
        }, 150);
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={(option) => option.text}
      options={options}
      onChange={(e, value) => {
        props.onChange(
          props.name,
          value.map((x) => x[props.async.valueKey])
        );
        setSelected(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default MultipleAutocomplete;