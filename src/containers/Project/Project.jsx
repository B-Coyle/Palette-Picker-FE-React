import React from "react";
import Palette from "../Palette/Palette";
import { connect } from "react-redux";
import { fetchDeleteProject } from "../../thunks/fetchDeleteProject";

export function Project(props) {
  
	const projectPalettes = props.palettes.filter(
    palette => +palette.project_id === +props.project.id
  );
  const palettes = projectPalettes.map(palette => (
    <Palette data={palette} key={palette.id} projectID={props.project.id} />
  ));
  return (
    <section className="Project">
      <div className="project-header">
        <div>
          <h3 className="project-title">{props.project.project_name}</h3>
        </div>
        <button
          onClick={() => props.fetchDeleteProject(props.project.id)}
        >
          <i class="fas fa-trash-alt" />
        </button>
      </div>
      <div className="project-palettes">{palettes}</div>
    </section>
  );
}

export const mapStateToProps = state => ({
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({
  fetchDeleteProject: id => dispatch(fetchDeleteProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
