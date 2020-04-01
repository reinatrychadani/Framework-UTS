import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      hobby: ''
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      hobby: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <strong>What's Your Hobby?</strong>

          <ul>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="cooking"
                checked={this.state.hobby === "cooking"}
                onChange={this.onRadioChange}
                />
                <span>Cooking</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="dance"
                checked={this.state.hobby === "dance"}
                onChange={this.onRadioChange}
                />
                <span>Dance</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="painting"
                checked={this.state.hobby === "painting"}
                onChange={this.onRadioChange}
                />
                <span>Painting</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="playing music"
                checked={this.state.hobby === "playing music"}
                onChange={this.onRadioChange}
                />
                <span>Playing Music</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="reading"
                checked={this.state.hobby === "reading"}
                onChange={this.onRadioChange}
                />
                <span>Reading</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="sports"
                checked={this.state.hobby === "sports"}
                onChange={this.onRadioChange}
                />
                <span>Sports</span>
              </label>
              <br></br>
              <label>
                <input
                type="radio"
                className="App-radio"
                value="traveling"
                checked={this.state.hobby === "traveling"}
                onChange={this.onRadioChange}
                />
                <span>Traveling</span>
              </label>
          </ul>

          <button type="submit" className="App-button">Choose Your Hobby</button>
        </form>
      </div>
    );
  }
}

export default App;
