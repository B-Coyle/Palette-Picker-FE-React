import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPalettes} from '../../thunks/fetchPalettes.js'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      project: [],
      loading: true,
      error: ''
    }
  }
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchPalettes();
  }


  render () {
    return(
      <h1>Palette Picker</h1>
      )
  }
}

export default App;
