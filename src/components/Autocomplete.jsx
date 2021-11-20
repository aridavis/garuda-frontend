import React, { useEffect, useState } from "react";
import { Autocomplete as MaterialAutocomplete } from "@mui/lab";
import { CircularProgress, TextField } from "@mui/material";
import ApiClient from "../utils/ApiClient";
var timeout;
const Autocomplete = (props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setText(props.defaultValue);
      ApiClient.Post(props.async.url, [], {
        text: props.defaultValue,
        selected: [],
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
    // eslint-disable-next-line
  }, [props.defaultValue]);

  return (
    <MaterialAutocomplete
      disableClearable
      inputValue={text}
      onInputChange={(e, v) => {
        setText(v);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (v.length > 0) {
            setLoading(true);
            ApiClient.Post(props.async.url, [], {
              text: v,
              selected: [],
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
        props.onChange(props.name, value[props.async.valueKey]);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          // variant={"outlined"}
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

export default Autocomplete;