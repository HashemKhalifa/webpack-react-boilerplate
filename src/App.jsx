import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { getInitialState } from './state';
import style from './app.css';
import Score from './components/score';
import SimonButton from './components/button';
import { startGame, showSequence, guess } from './state/game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.onClick = this.onClick.bind(this);
    this.onStart = this.onStart.bind(this);
  }

  onClick(color) {
    if (this.state.status === 'Go!') {
      this.setState(guess(this.state, color), () => {
        if (this.state.status === 'Watch') {
          this.launchSequence();
        }
      });
    }
  }

  onStart() {
    if (this.state.status === 'Start!') {
      showSequence(startGame(this.state), newState => this.setState(newState));
    }
  }

  launchSequence() {
    showSequence(this.state, newState => this.setState(newState));
  }

  render() {
    return (
      <div>
        <h1>Simon Says!</h1>
        <div className={style.app}>
          <Score
            score={this.state.score}
            status={this.state.status}
            start={this.onStart}
          />
          <SimonButton
            id={0}
            glow={this.state.seq[this.state.pos] === 0}
            color="red"
            onClick={this.onClick}
          />
          <SimonButton
            id={1}
            glow={this.state.seq[this.state.pos] === 1}
            color="green"
            onClick={this.onClick}
          />
          <SimonButton
            id={2}
            glow={this.state.seq[this.state.pos] === 2}
            color="blue"
            onClick={this.onClick}
          />
          <SimonButton
            id={3}
            glow={this.state.seq[this.state.pos] === 3}
            color="orange"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
