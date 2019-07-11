import React from "react";
import { connect } from "react-redux";
import Project from "../Project/Project";

const ProjectContainer = props => {
  return (
    <section class="saved-projects-section">
      {props.projects.length &&
        props.projects.reverse().map(project => (
          <Project key={project.id} project={project} />
        ))}
    </section>
  );
};

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectContainer);
