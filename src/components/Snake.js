import React, { Component } from "react";
import "../styles/snake.css";

const height = 10;
const width = 10;
const stop = 32;
const left = 65;
const right = 68;
const up = 87;
const down = 83;


const getRandom = () => {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
};

const emptyRows = () =>
  [...Array(width)].map((_) => [...Array(height)].map((_) => "grid-item"));

const increaseSpeed = (speed) => speed - 10 * (speed > 10);

const initialState = {
  rows: emptyRows(),
  snake: [getRandom()],
  food: getRandom(),
  direction: stop,
  speed: 200,
};

export default class Snake extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.changeDirection;
  }

  componentDidUpdate() {
    this.isCollapsed();
    this.isEaten();
  }

  moveSnake = () => {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    switch (this.state.direction) {
      case left:
        head.y += -1;
        break;
      case up:
        head.x += -1;
        break;
      case right:
        head.y += 1;
        break;
      case down:
        head.x += 1;
        break;
      default:
        return;
    }
  
    head.x += height * ((head.x < 0) - (head.x >= height));
    head.y += width * ((head.y < 0) - (head.y >= width));

    snakeCopy.push(head);
    snakeCopy.shift();
    this.setState({
      snake: snakeCopy,
      head: head,
    });
    this.update();
  };

  isEaten() {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    let food = this.state.food;
    if (head.x === food.x && head.y === food.y) {
      snakeCopy.push(head);
      this.setState({
        snake: snakeCopy,
        food: getRandom(),
        speed: increaseSpeed(this.state.speed),
      });
    }
  }

  update() {
    let newRows = emptyRows();
    this.state.snake.forEach(
      (element) => (newRows[element.x][element.y] = "snake")
    );
    newRows[this.state.food.x][this.state.food.y] = "food";
    this.setState({ rows: newRows });
  }

  isCollapsed = () => {
    let snake = this.state.snake;
    let head = { ...snake[snake.length - 1] };
    for (let i = 0; i < snake.length - 3; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        this.setState(initialState);
        alert(`game over: you are ${snake.length} years old`);
        this.snakeLengthRef.current.textContent =
          "Snake Length: " + snake.length;
        break;
      }
    }
  };

  changeDirection = ({ keyCode }) => {
    let direction = this.state.direction;
    switch (keyCode) {
      case left:
        direction = direction === right ? right : left;
        break;
      case right:
        direction = direction === left ? left : right;
        break;
      case up:
        direction = direction === down ? down : up;
        break;
      case down:
        direction = direction === up ? up : down;
        break;
      case stop:
        direction = stop;
        break;
      default:
        break;
    }
    this.setState({
      direction: direction,
    });
  };

  render() {
    const displayRows = this.state.rows.map((row, i) =>
      row.map((value, j) => <div name={`${i}=${j}`} className={value} />)
    );
    return (
      <>
        <p ref={this.snakeLengthRef} className="inputTitles">
          Age: <em className="inputsAB">{this.state.snake.length}</em>
        </p>
        <p className="psa">
          *scroll troll users must be over 12 years old and technologically
          proficient.. <br />
          **Use WASD for moving and space to pause age selection
        </p>
        <section className="snakeContainer">
          <div className="grid">{displayRows}</div>
        </section>
      </>
    );
  }
}
