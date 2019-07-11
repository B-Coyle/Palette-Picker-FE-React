import React from "react";
import { connect } from "react-redux";
import Project from "../Project/Project";

const ProjectContainer = props => {
  const projectComponents = props.projects.length ?
        props.projects.reverse().map(project => (
          <Project key={project.id} project={project} />
        ))
        : <p>Please create a project.</p>

  return (
    <section class="saved-projects-section">
      {projectComponents}
    </section>
  );
};

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectContainer);
