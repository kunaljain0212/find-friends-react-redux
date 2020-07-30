import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
// import data from "./data";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";
import Errorboundary from "../components/Errorboundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ data: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterdata = this.state.data.filter((data) => {
      return data.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return this.state.data.length === 0 ? (
      <h1>Loading!!!</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">FRIENDS</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <Errorboundary>
            <Cardlist data={filterdata} />
          </Errorboundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
