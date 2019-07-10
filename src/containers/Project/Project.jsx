import React from 'react';
import Palette from '../Palette/Palette';
import { connect } from "react-redux";

export function Project(props) {
    const palettes =  props.palettes.filter(palette => palette.project_id === props.project.id).map(palette => 
        <Palette data={palette}
        key= {palette.id}
        projectID= {props.project.id} />
        );
        return (
            <section className = 'Project'>
                <div className = 'project-header'>
                    <div>
                        <h3 className='project-title'>{props.project.project_name}</h3>
                    </div>
                    <i class="fas fa-trash-alt" />
                </div>
                <div className='project-palettes'>
                    {palettes}
                </div>
            </section>
        )
}

export const mapStateToProps = state => ({
    palettes: state.palettes
});

export default connect(
  mapStateToProps
)(Project);