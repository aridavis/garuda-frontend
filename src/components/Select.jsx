import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
} from "@mui/material";
import ApiClient from "../utils/ApiClient";

class Select extends Component {
  state = {
    options: [],
  };

  componentWillMount() {
    if (this.props.async !== undefined) {
      ApiClient.Get(this.props.async.url, [], {}).then((res) => {
        this.setState({
          options: res.data.contents.map((content) => ({
            value: content[this.props.async.valueKey],
            text: content[this.props.async.textKey],
          })),
        });
      });
    }
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel>{this.props.label}</InputLabel>
        <MaterialSelect
          value={this.props.value}
          onChange={(e) => {
            this.props.onChange(this.props.name, e.target.value.toString());
          }}
        >
          <MenuItem value="">
            <em>Choose {this.props.label}</em>
          </MenuItem>
          {this.props.async !== undefined &&
            this.state.options.map((option) => (
              <MenuItem value={option.value.toString()}>{option.text}</MenuItem>
            ))}
          {this.props.options !== undefined &&
            this.props.options.map((option) => (
              <MenuItem value={option.value.toString()}>{option.text}</MenuItem>
            ))}
        </MaterialSelect>
      </FormControl>
    );
  }
}

export default Select;