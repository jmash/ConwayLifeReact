import React, { Component } from 'react';

export default class GridCell extends Component {

  render() {
    const styles = {
      cell: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "1px",
        height:this.props.cellSize,
        width:this.props.cellSize,
        display:"inline-block"
      },
      alive: {
        background:"red",
      },
      dead: {
        background:"white",
      },
    }

    return (
      <div style={ styles.cell (this.props.life === "dead") ? styles.dead : styles.alive }></div>
    );
  }
}
