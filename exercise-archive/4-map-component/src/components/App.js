import React, { Component } from "react";
import Selector from "./Selector";
import { Map, ResultsTable } from "./Map";
import "../css/App.css";

class App extends Component {
  state = {
    selection: "",
    results: []
  };

  componentDidMount() {
    fetch("./swiss-vote-results-sample.json")
      .then(function(response) {
        return response.json();
      })
      .then(results => this.setState({ results }))
      .catch(error => console.error("FetchError:", error));
  }

  handleChange = e => {
    const selection = this.state.results[e.target.value];
    this.setState({ selection });
  };

  render() {
    return (
      <div>
        <Selector {...this.state} onChange={this.handleChange} />
        <figure>
          <Map {...this.state.selection} />
        </figure>
      </div>
    );
  }
}

export default App;
