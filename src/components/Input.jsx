import React, { Component } from "react";
import { TextField } from "@mui/material";
import { numberToString } from "../utils/NumberUtils";

class Input extends Component {
  render() {
    return (
      <TextField
        {...this.props}
        multiline={this.props.multiline}
        type={
          this.props.type === "email"
            ? "email"
            : this.props.type === "password"
            ? "password"
            : "text"
        }
        error={Boolean(
          this.props.touched[this.props.name] &&
            this.props.errors[this.props.name]
        )}
        helperText={
          this.props.touched[this.props.name] &&
          this.props.errors[this.props.name]
        }
        fullWidth
        name={this.props.name}
        value={
          this.props.value === null || this.props.value === undefined
            ? ""
            : this.props.type === "number"
            ? numberToString(parseInt(this.props.value))
            : this.props.value
        }
        label={this.props.label}
        placeholder={this.props.label}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
