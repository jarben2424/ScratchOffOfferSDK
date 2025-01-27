import React from "react"
import ReactDOM from "react-dom"
import ScratchCard from "../components/ScratchCard"

interface CreateScratchCardOptions {
  offer: string
  width?: number
  height?: number
  containerId: string
  onRevealed?: () => void
  onClaimed?: () => void
}

export const createScratchCard = (options: CreateScratchCardOptions) => {
  const { offer, width = 300, height = 150, containerId, onRevealed, onClaimed } = options

  const container = document.getElementById(containerId)
  if (!container) {
    console.error(`Container with id "${containerId}" not found`)
    return
  }

  ReactDOM.render(
    <ScratchCard offer={offer} width={width} height={height} onRevealed={onRevealed} onClaimed={onClaimed} />,
    container,
  )
}

