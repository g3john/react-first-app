import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
   clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FrontText date={this.state.date.toLocaleTimeString()} />
          <Github link="https://github.com/g3john" />
        </header>
      </div>
    );
  }
}

function FrontText(props) {
  return (
    <p>
      The time is {props.date}
    </p>
  );
}

function Github(props) {
  return (
    <a
      className="App-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
  );
}

export default App;
