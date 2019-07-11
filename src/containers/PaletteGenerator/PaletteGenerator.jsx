import React, { Component } from "react";
import { connect } from "react-redux";
import randomHexColor from "random-hex-color";
import Form from "../Form/Form";

class PaletteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["", "", "", "", ""],
      locked: [false, false, false, false, false]
    };
  }

  componentDidMount() {
    this.generateColors();
  }

  lockColor = target => {
    const { locked } = this.state;
    const newLocked = locked.map((bool, i) => {
      return i === target ? !bool : bool;
    });
    this.setState({ locked: newLocked });
  };

  determineLock = i => {
    const { locked } = this.state;
    return locked[i] ? "" : "-open";
  }

  generateColors = () => {
    const { locked, colors } = this.state;
    const newColors = colors.map((color, i) => {
      return locked[i] ? color : randomHexColor();
    });
    this.setState({ colors: newColors });
  };

  render() {
    const { colors } = this.state;
    return (
      <div>
        <section class="palette-container">
          <div
            id="color1"
            class="color-container"
            style={{ backgroundColor: colors[0] }}
          >
            <button
              id="1"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockColor(0)}
            >
              <i
                id="1"
                class={`fas color-lock1 fa-lock${this.determineLock(0)}`}
              />
            </button>
            <p id="color1-name" class="color-hex">
              {colors[0]}
            </p>
          </div>
          <div
            id="color2"
            class="color-container"
            style={{ backgroundColor: colors[1] }}
          >
            <button
              id="2"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockColor(1)}
            >
              <i
                id="2"
                class={`fas color-lock2 fa-lock${this.determineLock(1)}`}
              />
            </button>
            <p id="color2-name" class="color-hex">
              {colors[1]}
            </p>
          </div>
          <div
            id="color3"
            class="color-container"
            style={{ backgroundColor: colors[2] }}
          >
            <button
              id="3"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockColor(2)}
            >
              <i
                id="3"
                class={`fas color-lock3 fa-lock${this.determineLock(2)}`}
              />
            </button>
            <p id="color3-name" class="color-hex">
              {colors[2]}
            </p>
          </div>
          <div
            id="color4"
            class="color-container"
            style={{ backgroundColor: colors[3] }}
          >
            <button
              id="4"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockColor(3)}
            >
              <i
                id="4"
                class={`fas color-lock4 fa-lock${this.determineLock(3)}`}
              />
            </button>
            <p id="color4-name" class="color-hex">
              {colors[3]}
            </p>
          </div>
          <div
            id="color5"
            class="color-container"
            style={{ backgroundColor: colors[4] }}
          >
            <button
              id="5"
              class="color-lock"
              value="Lock Color"
              onClick={() => this.lockColor(4)}
            >
              <i
                id="5"
                class={`fas color-lock5 fa-lock${this.determineLock(4)}`}
              />
            </button>
            <p id="color5-name" class="color-hex">
              {colors[4]}
            </p>
          </div>
        </section>
        <section class="generate-palette">
          <input
            type="button"
            class="generate-palette-btn button"
            value="Regenerate Colors"
            onClick={this.generateColors}
          />
        </section>
        <Form colors={this.state.colors} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(PaletteGenerator);
