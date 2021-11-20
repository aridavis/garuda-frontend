import React, { useEffect, useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import Input from "./Input";
import Select from "./Select";

// import Autocomplete from "./Autocomplete";
// import MultipleAutocomplete from "./MultipleAutocomplete";
import { DropzoneArea } from "material-ui-dropzone";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput as MaterialInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import moment from "moment";
import Autocomplete from "./Autocomplete";
import MultipleAutocomplete from "./MultipleAutoComplete";
import { DateTimePicker } from "@mui/lab";

const InputField = (props) => {
  const [initialImages, setInitialImages] = useState([]);
  const [initialImageNames, setInitialImageNames] = useState([]);
  // eslint-disable-next-line
  const [addedImages, setAddedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  // eslint-disable-next-line
  const [deletedImageNames, setDeletedImageNames] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (props.type === "update-image") {
      setInitialImages(props.value);
      setInitialImageNames(props.imageNames);
    }
    // eslint-disable-next-line
  }, []);

  const handleSelectChange = (value) => {
    props.onChange(value);
  };

  const renderDatePicker = (data) => {
    return (
      <DatePicker
        clearable
        fullWidth
        name={data.name}
        label={data.label}
        value={data.value}
        onChange={(value) => {
          console.log("setting value to", value);
          props.setFieldValue(data.name, value);
        }}
        renderInput={(params) => <TextField {...params} />}
        animateYearScrolling
      />
    );
  };

  const renderDateTimePicker = (data) => {
    return (
      <DateTimePicker
        clearable
        fullWidth
        name={data.name}
        label={data.label}
        value={data.value}
        onChange={(value) => {
          console.log("setting value to", value);
          props.setFieldValue(data.name, value);
        }}
        renderInput={(params) => <TextField {...params} />}
        animateYearScrolling
      />
    );
  };

  const renderTextField = (data) => {
    return (
      <Input
        {...data}
        name={data.name}
        label={data.label}
        value={
          (data.value === null || data.value === undefined) &&
          (data.type === "number" || data.type === "numeric")
            ? "0"
            : data.value === null || data.value === undefined
            ? ""
            : data.value
        }
        multiline={data.type === "multiline"}
        onChange={data.onChange}
        type={data.type}
      />
    );
  };

  const renderPasswordField = (data) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{data.label}</InputLabel>
        <MaterialInput
          autoComplete="false"
          name={data.name}
          type={showPassword ? "text" : "password"}
          value={data.value}
          onChange={props.onChange}
          error={Boolean(data.touched[data.name] && data.errors[data.name])}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {Boolean(data.touched[data.name] && data.errors[data.name]) && (
          <FormHelperText error>
            {data.touched[data.name] && data.errors[data.name]}
          </FormHelperText>
        )}
      </FormControl>
    );
  };

  const renderCheck = (data) => {
    return (
      <div className="flex items-center">
        <Checkbox
          checked={data.value}
          name={data.name}
          onChange={data.onChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            color: "#3c1874",
            "&.Mui-checked": {
              color: "#3c1874",
            },
          }}
        />
        <p>{data.label}</p>
      </div>
    );
  };

  const renderSelect = (data) => {
    return (
      <Select
        async={data.async}
        options={data.options}
        label={data.label}
        name={data.name}
        value={data.value.toString()}
        onChange={handleSelectChange}
      />
    );
  };

  const renderImageField = (data) => {
    return (
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={data.placeholder}
        onChange={(files) => {
          props.onChange(data.name, files);
        }}
        filesLimit={data.limit}
      />
    );
  };

  const renderUpdateImage = (data) => {
    return (
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(value) => {
          const newImageNames = value.map((res) => res.name);
          const delImages = [
            ...deletedImageNames,
            ...initialImageNames.filter(
              (res) =>
                !deletedImageNames.includes(res) && !newImageNames.includes(res)
            ),
          ];

          const deletedImagesUrl = [];

          for (let i = 0; i < delImages.length; i++) {
            for (let j = 0; j < initialImageNames.length; j++) {
              if (initialImageNames[j] === delImages[i]) {
                deletedImagesUrl.push(
                  initialImages.filter((im) => im.endsWith(delImages[i]))[0]
                );
              }
            }
          }

          setInitialImageNames([
            ...initialImageNames.filter((im) => !delImages.includes(im)),
          ]);
          setDeletedImages([...deletedImages, ...deletedImagesUrl]);

          setAddedImages(
            value.filter((res) => !initialImageNames.includes(res.name))
          );

          props.onChange("", {
            added_picture_urls: value.filter(
              (res) => !initialImageNames.includes(res.name)
            ),
            deleted_picture_urls: [...deletedImages, ...deletedImagesUrl],
          });
        }}
        initialFiles={data.value}
        filesLimit={6}
      />
    );
  };

  const renderAutoComplete = (res) => {
    return (
      <Autocomplete
        async={res.async}
        id
        name={res.name}
        label={res.label}
        type="autocomplete"
        value={res.value}
        onChange={res.onChange}
        defaultValue={res.defaultValue}
      />
    );
  };

  const renderMultipleAutoComplete = (res) => {
    return (
      <MultipleAutocomplete
        async={res.async}
        name={res.name}
        label={res.label}
        type="autocomplete"
        value={res.value}
        onChange={res.onChange}
      />
    );
  };

  const renderInputField = (res) => {
    switch (res.type) {
      case "email":
      case "number":
      case "text":
      case "multiline":
      case "numeric":
        return renderTextField(res);
      case "password":
        return renderPasswordField(res);
      case "check":
        return renderCheck(res);
      case "select":
        return renderSelect(res);
      case "datetime":
        return renderDateTimePicker(res);
      case "date":
        return renderDatePicker(res);
      case "autocomplete":
        return renderAutoComplete(res);
      case "multiple-autocomplete":
        return renderMultipleAutoComplete(res);
      case "image":
        return renderImageField(res);
      case "update-image":
        return renderUpdateImage(res);
      default:
        return <></>;
    }
  };

  return renderInputField(props);
};

export default InputField;
