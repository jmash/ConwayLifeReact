import React, { Component } from 'react';
import GridCell from './GridCell';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lifeGrid: (function(gridSizeX, gridSizeY) {
        const xs = new Array(gridSizeX).fill({life: "alive"});
        const ys = new Array(gridSizeY).fill(xs);
        return ys;
      })(this.props.gridSizeX, this.props.gridSizeY)
    }
  }

  handleCellClick = (e) => {
    console.log(e);
  }

  updateGrid() {

  }

  render() {
    // console.log(this.state.lifeGrid[0][0].life);
    const styles = {
      grid: {
        textAlign:"center",
        height:this.props.cellSize,
      },
      row: {
        height:this.props.cellSize,
      },
      alive: {
        background:"red",
      },
      dead: {
        background:"white",
      }
    };

    const x = this.props.gridSizeX;
    const y = this.props.gridSizeY;

    var rows = [];
    for (let i = 0; i < Number(x); i++) {
      var cells = [];
      for (let j = 0; j < Number(y); j++) {
        cells.push(<GridCell key={ i + "_" + j }
                   id={ i + "_" + j }
                   x={ i }
                   y={ j }
                   cellSize={ this.props.cellSize }
                   life={ (this.state.lifeGrid[i][j].life === "dead") ? styles.dead : styles.alive }
                   onClick={ this.handleCellClick.bind(this) }
                 />)
      }
      var row = React.createElement('div', { style: styles.row, key: i }, cells);
      // console.log(row);
      rows.push(row);
    }
    // console.log(rows);
    return (
      <div style={ styles.grid }>{ rows }</div>
    )

  }
}
