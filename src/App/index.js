import React, {Component} from 'react';
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
  }


  render () {
    return(
      <h1>Palette Picker</h1>
      )
  }
}

export default App;
