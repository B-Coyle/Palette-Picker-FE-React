import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPalettes } from "../../thunks/fetchPalettes.js";
import "./App.scss";
import { fetchProjects } from "../../thunks/fetchProjects.js";
import ProjectContainer from "../ProjectContainer/ProjectContainer.jsx";
import PaletteGenerator from "../PaletteGenerator/PaletteGenerator.jsx";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: ""
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchPalettes();
  }

  render() {
    return (
      <main>
        <header>
          <h1>Palette Picker</h1>
        </header>
        <PaletteGenerator/>
        <ProjectContainer/>
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchPalettes: () => dispatch(fetchPalettes()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
