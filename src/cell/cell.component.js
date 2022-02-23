import React from "react"

export function Cell ({currentValue, onClick}){
  return (
    <div className="Grid-cell" onClick={onClick}>{currentValue}</div>
  ) 
}
