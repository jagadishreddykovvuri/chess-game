import React, { Component } from "react";
import "styled-components/macro";
import { SquareBox } from "./styledComponents";

class Square extends Component {
  render() {
    const { shade, onClick, style } = this.props;

    return (
      <SquareBox
        isThinkBox={shade}
        className={shade}
        onClick={onClick}
        style={style}
      />
    );
  }
}

export default Square;
