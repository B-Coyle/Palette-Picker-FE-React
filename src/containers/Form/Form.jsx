import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewProject } from '../../thunks/fetchNewProject';
import { fetchNewPalette } from '../../thunks/fetchNewPalette';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      paletteName: '',
      selectedProject: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
  }

  createProject = () => {
    this.props.fetchNewProject(this.state.projectName);
    this.setState({ projectName: "" });
  }

  createPalette = () => {
    const colors = this.props.colors.map((color, i) => ({
      [`color${i+1}`]: color
    }));
    const palData = {
      palette_name: this.state.paletteName,
      project_id: this.state.selectedProject
    };
    const palette = Object.assign({}, palData, ...colors );
    
    this.props.fetchNewPalette(palette);
    this.setState({paletteName: ''});
  }

  
  
  render() {
    const options = this.props.projects.map(project => 
      <option value={project.id} key={project.id} id={`project-option${project.id}`}>
        {project.project_name}
      </option>)
    return (
      <div>
        <section class="form-container">
          <form id="name-project-form">
            <p class="project-exists hidden">Project already exists</p>
            <input
              class="project-name-input"
              id="projectName"
              type="text"
              placeholder="New Project Name"
              value={this.state.projectName}
              onChange={e => this.handleChange(e)}
            />
            <input
              class="button"
              id="create-project-btn"
              type="button"
              value="Create Project"
              onClick={this.createProject}
            />
          </form>
        </section>
        <section class="form-container">
          <form id="name-palette-form">
            <select
              id="selectedProject"
              onChange={e => this.handleChange(e)}
            >
              <option selected disabled>
                Please Select A Project
              </option>
              {options}
            </select>
            <input
              class="palette-name-input"
              type="text"
              placeholder="Palette Name"
              id="paletteName"
              value={this.state.paletteName}
              onChange={e => this.handleChange(e)}
            />
            <input
              class="button"
              type="button"
              id="create-palette-btn"
              value="Create Palette"
              onClick={this.createPalette}
            />
          </form>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  fetchNewProject: (name) => dispatch(fetchNewProject(name)),
  fetchNewPalette: (palette) => dispatch(fetchNewPalette(palette))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Form);
