import React, { Component } from "react"
import {Cell} from "./cell/cell.component.js"
import logo from "./logo.svg"
import "./App.css"

class Grid extends Component {
  constructor() {
    super();
    this.initializeGrid()
    this.state = {
      data: this.initializeGrid(),
      xTurn: true,
      inProgress: false
    }
  }

  initializeGrid() {
    const data = []
    for (let r = 0; r < 3; r++) {
      data.push([])
      for (let c = 0; c < 3; c++) {
        data[r][c] = null
      }
    }

    return data;
  }

  switchTurn() {
    this.setState({
      xTurn: !this.state.xTurn
    })
  }

  render() {
    const handleCellClick = (r, c) => {
      const dataClone = this.state.data.slice()
      if (dataClone[r][c]) {
        alert('meeeeeeeeee this move is not possible')
        return
      }
      dataClone[r][c] = this.state.xTurn ? 'X' : 'O';
      this.setState({data: dataClone})
      this.switchTurn()
    }

    const items = []
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        items.push(<Cell key={r + ':' + c} onClick={handleCellClick.bind(null, r, c)} currentValue={this.state.data[r][c]}/>)
      }
    }

    const gridClasses = `grid ${this.state.inProgress ? 'battle' : 'tracklin'}`

    return (
      <div className={gridClasses}>
        <button onClick={this.startGame.bind(this)} className="start-button">Start</button>
        <div className="turn">Turn {this.state.xTurn? 'X' : 'O'}</div>
        <div className="cells">{items}</div>
      </div>
    )
  }

  startGame() {
    this.setState({
      inProgress: true
    })
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Play X Mix Drix with me
          </p>
          <Grid />
        </header>
      </div>
    )
  }
}

export default App
