import React, { Component } from 'react';
import GridCell from './GridCell';
import update from 'react-addons-update';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lifeGrid: (function(gridSizeX, gridSizeY) {
        const xs = new Array(gridSizeX).fill({life: "dead"});
        const ys = new Array(gridSizeY).fill(xs);
        return ys;
      })(this.props.gridSizeX, this.props.gridSizeY)
    }
  }

  handleCellClick = (x, y) => {
    console.log(this.state.lifeGrid[y][x].life)
    switch(this.props.drawFlag) {
      case "paint":
        this.setState({
          lifeGrid: update(this.state.lifeGrid, {[y]: {[x]: {life: {$set: 'alive'}}}})
        });
        break;
      case "toggle":
        console.log(this.state.lifeGrid[y][x].life);
        if (this.state.lifeGrid[y][x].life === 'dead') {
          console.log("entering first toggle case");
          this.setState({
            lifeGrid: update(this.state.lifeGrid, {[y]: {[x]: {life: {$set: 'alive'}}}})
          }, function() {  });
        } else {
          console.log("entering second toggle case");
          this.setState({
            lifeGrid: update(this.state.lifeGrid, {[y]: {[x]: {life: {$set: 'dead'}}}})
          });
        }
        break;
      case "clear":
          this.setState({
            lifeGrid: update(this.state.lifeGrid, {[y]: {[x]: {life: {$set: 'dead'}}}})
          });
        break;
    }
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
                   x={ j }
                   y={ i }
                   cellSize={ this.props.cellSize }
                   life={ (this.state.lifeGrid[i][j].life === "dead") ? "dead" : "alive" }
                   onClick={ this.handleCellClick.bind(this) }
                 />)
      }
      var row = React.createElement('div', { style: styles.row, key: i }, cells);
      rows.push(row);
    }
    return (
      <div style={ styles.grid }>{ rows }</div>
    )

  }
}
