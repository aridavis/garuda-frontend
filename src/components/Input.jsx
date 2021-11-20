import React, { Component } from "react";
import { TextField } from "@mui/material";
import { numberToString, stringToNumber } from "../utils/NumberUtils";

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
        onChange={
          this.props.onChange
        }
      />
    );
  }
}

export default Input;