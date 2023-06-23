import React, { Component } from 'react';
import cbat from '../images/formimages/cbat.mp3';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ seconds: prevState.seconds - 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      this.playAudio();
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  playAudio() {
    const audio = new Audio(cbat);
    audio.play();
  }

  render() {
    const { seconds } = this.state;

    return (
      <>
        {seconds === 0 ? (
          <span>Time's up!</span>
        ) : (
          <p className='timer'>{seconds} seconds remaining</p>
        )}
      </>
    );
  }
}

export default Timer;
