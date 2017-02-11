import React, { Component } from 'react';

export default class GridCell extends Component {
  clickEventHandler(x, y) {
    this.props.onClick(x, y);
  }

  render() {
    const styles = {
      alive: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "1px",
        height:this.props.cellSize,
        width:this.props.cellSize,
        display:"inline-block",
        background:"red",
      },
      dead: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "1px",
        height:this.props.cellSize,
        width:this.props.cellSize,
        display:"inline-block",
        background:"white",
      },
    }
    return (
      <div onClick={ this.clickEventHandler.bind(this, this.props.x, this.props.y) } style={ (this.props.life === "dead") ? styles.dead : styles.alive }></div>
    );
  }
}
