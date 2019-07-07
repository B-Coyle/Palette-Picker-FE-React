import React from 'react';
import Palette from '../Palette';

function Projects(props) {
    const palettes =  props.data.palettes.map(palette => 
        <Palette data={palette}
        key= {palette.id}
        projectID= {props.data.id} />
        );
        return (
            <section className = 'Project'>
                <div className = 'project-header'>
                    <div>
                        <h3 className='project-title'></h3>
                    </div>
                    <i class="fas fa-trash-alt" />
                </div>
                <div className='project-palettes'>
                </div>
            </section>
        )
}