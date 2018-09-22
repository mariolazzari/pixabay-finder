import React, { Component, Fragment } from "react";
import "./App.css";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Search />
      </Fragment>
    );
  }
}

export default App;
