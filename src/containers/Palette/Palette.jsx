import React from 'react';

function Palette(props) {
	const palette = props.data;
	return(
		<div className='palette-holder' id={`palette${palette.id}`}>
			<h3>{palette.palette_name}</h3>
			<div className='saved-palettes'>
				<div 
					id="color1" 
					className="saved-color color-container" 
					style={{backgroundColor: palette.color1}}
				>
					</div>
				<div 
					id="color2" 
					className="saved-color color-container" 
					style={{backgroundColor: palette.color2}}
				>
				</div>
				<div 
					id="color3" 
					className="saved-color color-container" 
					style={{backgroundColor: palette.color3}}
				>
				</div>
				<div 
					id="color4" 
					className="saved-color color-container" 
					style={{backgroundColor: palette.color4}}
				>
				</div>
				<div 
					id="color5" 
					className="saved-color color-container" 
					style={{backgroundColor: palette.color5}}
				>
				</div>
				<button 
					id={palette.id} 
					data-project={palette.project_id} 
					className='trash-btn'
				>
					<i 
						id={palette.id} 
						className="fas trash-btn fa-trash-alt fa-2x"
					>
					</i>
				</button>
			</div>
		</div>
	)
}

export default Palette;