import React from "react";
import { connect } from "react-redux";
import { fetchDeletePalette } from "../../thunks/fetchDeletePalette";

function Palette(props) {
  const palette = props.data;
  return (
    <div className="palette-holder" id={`palette${palette.id}`}>
      <h3>{palette.palette_name}</h3>
      <div className="saved-palettes">
        <div
          id="color1"
          className="saved-color color-container"
          style={{ backgroundColor: palette.color1 }}
        />
        <div
          id="color2"
          className="saved-color color-container"
          style={{ backgroundColor: palette.color2 }}
        />
        <div
          id="color3"
          className="saved-color color-container"
          style={{ backgroundColor: palette.color3 }}
        />
        <div
          id="color4"
          className="saved-color color-container"
          style={{ backgroundColor: palette.color4 }}
        />
        <div
          id="color5"
          className="saved-color color-container"
          style={{ backgroundColor: palette.color5 }}
        />
        <button
          id={palette.id}
          data-project={palette.project_id}
          className="trash-btn"
          onClick={() => props.fetchDeletePalette(palette.id)}
        >
          <i id={palette.id} className="fas trash-btn fa-trash-alt fa-2x" />
        </button>
      </div>
    </div>
  );
}

export const mapDispatchToProps = dispatch => ({
  fetchDeletePalette: id => dispatch(fetchDeletePalette(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Palette);
