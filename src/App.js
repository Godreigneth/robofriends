import React, { Component } from "react";
import CardList from "./Components/CardList/Index.js";
import SearchBox from "./Components/SearchBox/Index.js";
import { robots } from "./Components/Robots/Robots";

import  "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">MyRoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />,
      </div>
    );
  }
}
export default App;
