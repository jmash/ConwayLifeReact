import React, { Component } from 'react';

export default class GridCell extends Component {
  // constructor(props) {
  //   super(props);
  // }

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

    // console.log(this.props.id);
    return (
      <div style={ styles.cell (this.props.life === "dead") ? styles.dead : styles.alive }></div>
    );
  }
}
