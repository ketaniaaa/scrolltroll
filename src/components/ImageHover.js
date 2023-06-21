import React, { Component } from 'react';
import '../styles/hover.css';

class ImageHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      cursorPosition: { x: 0, y: 0 }
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleMouseMove = (event) => {
    this.setState({ cursorPosition: { x: event.clientX, y: event.clientY } });
  };

  render() {
    const { hovered, cursorPosition } = this.state;
    const { imageUrl } = this.props;

    const originalPosition = { x: 10, y: 10 };
    const moveAmount = 10;

    const imageStyle = {
      position: 'fixed',
      top: hovered ? cursorPosition.y - moveAmount : originalPosition.y,
      left: hovered ? cursorPosition.x - moveAmount : originalPosition.x,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      opacity: hovered ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    };

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
        style={{ width: '100%', height: '100vh' }}
        className="mainHover"
      >
        <img
          src={imageUrl}
          alt="Hover Image"
          style={imageStyle}
          className={`imageUnhovered ${hovered ? 'imageHovering' : 'staticHover'}`}
        />
      </div>
    );
  }
}

export default ImageHover;

