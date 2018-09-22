import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Search extends Component {
  state = {
    searchText: "",
    amount: 20,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "10200781-e7ea86e1a0521934fbe32e376",
    images: []
  };

  // on text change event handler
  onTextChange = e => {};

  // on select amount change
  onAmountChange = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { searchText, amount } = this.state;
    return (
      <Fragment>
        <TextField
          name="searchText"
          value={searchText}
          onChange={this.onTextChange}
          label="Search for images"
          fullWidth={true}
        />
        <Select name="amount" value={amount} onChange={this.onAmountChange}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </Fragment>
    );
  }
}

export default Search;
