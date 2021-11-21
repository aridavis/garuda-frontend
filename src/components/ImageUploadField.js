import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import Dropzone from "react-dropzone";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImageUploadField = ({
  label,
  error,
  helperText,
  onChange,
  value,
  initialImage,
}) => {
  const [image, setImage] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (value !== null && value !== undefined)
      setImage(URL.createObjectURL(value));
    else setImage("");
  }, [value]);

  useEffect(() => {
    setImage("");
  }, [initialImage]);

  return (
    <Box position="relative">
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        hidden
        ref={ref}
        onChange={(e) => {
          if (
            e.currentTarget.files !== null &&
            e.currentTarget.files.length > 0
          ) {
            onChange(e.currentTarget.files[0]);
          }
        }}
      />
      {image !== "" && (
        <img
          style={{
            zIndex: "10",
            position: "absolute",
            objectFit: "contain",
            width: "100%",
            height: "300px",
            backgroundColor: image === "" ? "transparent" : "white",
          }}
          src={image}
          alt="identity"
        />
      )}
      {initialImage !== undefined && image === "" ? (
        <img
          style={{
            zIndex: "10",
            position: "absolute",
            objectFit: "contain",
            width: "100%",
            height: "300px",
            backgroundColor: image === "" ? "transparent" : "white",
          }}
          src={initialImage}
          alt="identity"
        />
      ) : (
        ""
      )}
      <TextField
        fullWidth
        label={label}
        error={error}
        helperText={helperText}
        InputLabelProps={{ shrink: true }}
        style={{ zIndex: 11 }}
        InputProps={{
          inputComponent: ({ inputRef, ...rest }) => (
            <>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  if (acceptedFiles.length > 0) {
                    onChange(acceptedFiles[0]);
                  }
                }}
                accept="image/jpeg, image/png, image/jpg"
              >
                {({ getRootProps }) => (
                  <div
                    {...getRootProps()}
                    style={{
                      width: "100%",
                      position: "relative",
                      height: "300px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      ref.current.click();
                    }}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      style={{
                        padding: "5px",
                        zIndex: 10,
                        height: "300px",
                        width: "100%",
                        position: "absolute",
                        top: "0",
                      }}
                      {...getRootProps()}
                    />
                    {image === "" && initialImage === undefined && (
                      <Box
                        style={{ zIndex: 9 }}
                        top="0"
                        position="absolute"
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <CameraAltIcon /> Drag or Drop Picture
                      </Box>
                    )}
                  </div>
                )}
              </Dropzone>
            </>
          ),
        }}
      />
    </Box>
  );
};

export default ImageUploadField;
