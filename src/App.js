import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class Grid extends Component {
  empty = {}
  black = {}
  white = {}
  data = []

  initializeGrid() {
    for (let r = 0; r < 3; r++) {
      this.data.push([])
      for (let c = 0; c < 3; c++) {
        this.data[r][c] = this.empty
      }
    }
  }

  render() {
    const items = []
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        items.push(<div className="Grid-cell"></div>)
      }
    }

    return (
      <div className="Grid">{items}</div>
    )
  }
}

class App extends Component {
  render() {
    const fireAddConversion = () => {
      window.obApi('track', 'Checkout Me');
    }
    
      return (
      <div className="App">
        <header className="App-header">
          <a href="https://www.google.com" onclick="console.log('heyyyyyyyyyy')">Next</a>
          <p>
            Marketer's site example
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Play X Mix Drix with me
          </p>
          <button onClick={fireAddConversion}>Play now!!!</button>
          <button>Play now with Alaa!!</button>
          <Grid />
        </header>
      </div>
    )
  }
}

export default App
