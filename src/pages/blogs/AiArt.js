import React, { Component } from "react";
import '../../styles/scrolltest.css';
import testImg from '../../images/homebanner.png';

class AiArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div
        className={`imageCurseContainer ${isHovered ? "hoveredVibrate" : ""}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={testImg} alt="banner" />
      </div>
    );
  }
}

export default AiArt;
