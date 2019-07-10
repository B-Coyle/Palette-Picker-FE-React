import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPalettes} from '../../thunks/fetchPalettes.js'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
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
      <main>
      <header>
        <h1>Palette Picker</h1>
      </header>
      <section class="palette-container">
        <div id="color1" class="color-container" data-locked={false}>
          <button id="1" class="color-lock" value='Lock Color'><i id="1" class="fas color-lock1 fa-lock-open"></i>
          </button>
          <p id="color1-name" class="color-hex"></p>
        </div>
        <div id="color2" class="color-container" data-locked={false}>
          <button id="2" class="color-lock" value='Lock Color'><i id="2" class="fas color-lock2 fa-lock-open"></i></button>
          <p id="color2-name" class="color-hex"></p>
        </div>
        <div id="color3" class="color-container" data-locked={false}>
          <button id="3" class="color-lock" value='Lock Color'><i id="3" class="fas color-lock3 fa-lock-open"></i></button>
          <p id="color3-name" class="color-hex"></p>
        </div>
        <div id="color4" class="color-container" data-locked={false}>
          <button id="4" class="color-lock" value='Lock Color'><i id="4" class="fas color-lock4 fa-lock-open"></i></button>
          <p id="color4-name" class="color-hex"></p>
        </div>
        <div id="color5" class="color-container" data-locked={false}>
          <button id="5" class="color-lock" value='Lock Color'><i  id="5" class="fas color-lock5 fa-lock-open"></i></button>
          <p id="color5-name" class="color-hex"></p>
        </div>
      </section>
      <section class='generate-palette'>
          <input type='button' class='generate-palette-btn' value='Regenerate Colors' />
      </section>
      <section class='form-container'>
        <form id='name-project-form'>
          <p class="project-exists hidden">Project already exists</p>
          <input class='project-name-input' type='text' placeholder="New Project Name" />
          <input class='button' id='create-project-btn' type="button" value='Create Project' />
        </form> 
      </section>
      <section class='form-container'>
        <form id='name-palette-form'>
          <select id='project-select'><option value='' disabled>Please Select A Project</option> */}
          </select>
          <input class='palette-name-input' type='text' placeholder='Palette Name' />
          <input class='button' type="button" id='create-palette-btn' value='Create Palette' />
        </form>
      </section>
      <section class='saved-projects-section'>
        <div class='saved-projects-container'></div>
      </section>
    </main>
      )
  }
}

export default App;
