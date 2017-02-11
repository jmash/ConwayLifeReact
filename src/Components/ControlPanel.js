import React, { Component } from 'react';
import Grid from './Grid';
import update from 'react-addons-update';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSizeX: 30,
      gridSizeY: 30,
      cellSize: 25,
      drawFlags: {
        paint: false,
        toggle: false,
        clear: false,
        stamp: false,
      }
    };
  }

  handleCellSize = (e) => {
    this.setState({ cellSize: Number(e.target.value) })
  };

  handleDrawOptionClick = (e) => {
    // this.uncheckDrawOptions();

  };

  handleDrawOptionChange = (e) => {
    let clearedFlags = {
      paint: false,
      toggle: false,
      clear: false,
      stamp: false,
    };
    console.log(e.target.id);
    this.setState({
      drawFlags: clearedFlags
    }, this.setState({
      drawFlags: update(this.state.drawFlags, {[e.target.id]: {$set: true}})
    }));
    console.log(this.state.drawFlags)
  }

  render() {
    const styles = {
      viewport: {

      },
      controlpanel: {
        // height:70,
        width:"100%",
        background:"grey",
        opacity:"0.7",
        top:0,
      },
      title: {
        margin:0,
        fontSize:"1em",
        top:0,
      },
      options: {
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:0,
        marginBottom:0,
        textAlign:"center",
      },
      buttonSection: {
        display:"inline-block"
      },
      slidersSection: {
        display:"inline-block"
      },
      radioSection: {
        display:"block"
      },
      options_h3: {
        margin:0,
      }
    }
    return (
      <div style={ styles.viewport }>
        <div style={ styles.controlpanel }>
          <h1 style={ styles.title }>Conways Game of Life (logo incoming)</h1>
          <div style={ styles.options }>
            <h3 style={ styles.options_h3 }>Controls</h3>
            <div style={ styles.buttonSection }>
              <button>Run</button>
              <button>Next</button>
              <button>Reset</button>
              <button>Randomize</button>
            </div>
            <div style={ styles.slidersSection }>
              <input
                    type={ "range" }
                    name={ "cellSize" }
                    id={ "cellSize" }
                    value={ this.state.cellSize }
                    min={10}
                    max={30}
                    onChange={ this.handleCellSize }
                    step={ 1 }
              />
            </div>
            <div style={ styles.radioSection }>
              <label>Paint<input checked={ this.state.drawFlags.paint } type="radio" value="Paint" id="paint" onChange={ this.handleDrawOptionChange }/></label>
              <label>Toggle<input checked={ this.state.drawFlags.toggle } type="radio" value="Toggle" id="toggle" onChange={ this.handleDrawOptionChange} /></label>
              <label>Clear<input checked={ this.state.drawFlags.clear } type="radio" value="Clear" id="clear" onChange={ this.handleDrawOptionChange} /></label>
              <label>Stamp<input checked={ this.state.drawFlags.stamp } type="radio" value="Stamp" id="stamp" onChange={ this.handleDrawOptionChange} /></label>
            </div>
          </div>
        </div>
        <Grid
              gridSizeX={ this.state.gridSizeX }
              gridSizeY={ this.state.gridSizeY }
              cellSize={ this.state.cellSize }
        />
      </div>
    );
  }
}
/*onClick={ this.handleDrawOptionClick }*/
