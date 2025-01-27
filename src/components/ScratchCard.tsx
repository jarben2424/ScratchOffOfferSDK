import type React from "react"
import { useRef, useState, useEffect } from "react"

interface ScratchCardProps {
  offer: string
  width: number
  height: number
  onRevealed?: () => void
  onClaimed?: () => void
}

const ScratchCard: React.FC<ScratchCardProps> = ({ offer, width, height, onRevealed, onClaimed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isClaimed, setIsClaimed] = useState(false)
  const [isScratching, setIsScratching] = useState(false)
  const [scratchPercentage, setScratchPercentage] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "#888888")
      gradient.addColorStop(1, "#AAAAAA")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < 10000; i++) {
        ctx.beginPath()
        ctx.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`
        ctx.fill()
      }

      ctx.font = "bold 24px Arial"
      ctx.fillStyle = "#FFFFFF"
      ctx.textAlign = "center"
      ctx.fillText("Scratch here!", width / 2, height / 2)
    }
  }, [width, height])

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    const rect = canvas?.getBoundingClientRect()
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect!.left,
        y: e.touches[0].clientY - rect!.top,
      }
    } else {
      return {
        x: e.clientX - rect!.left,
        y: e.clientY - rect!.top,
      }
    }
  }

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (ctx) {
      const { x, y } = getCoordinates(e)
      ctx.globalCompositeOperation = "destination-out"
      ctx.beginPath()
      ctx.arc(x, y, 20, 0, Math.PI * 2)
      ctx.fill()

      const imageData = ctx.getImageData(0, 0, width, height)
      const pixelsScratched = imageData.data.filter((_, i) => i % 4 === 3 && imageData.data[i] === 0).length
      const totalPixels = width * height
      const newPercentage = (pixelsScratched / totalPixels) * 100
      setScratchPercentage(newPercentage)

      if (newPercentage > 70 && !isRevealed) {
        setIsRevealed(true)
        onRevealed && onRevealed()
      }
    }
  }

  const startScratching = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsScratching(true)
    scratch(e)
  }

  const stopScratching = () => setIsScratching(false)

  const handleClaim = () => {
    setIsClaimed(true)
    onClaimed && onClaimed()
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg">
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        {isRevealed && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground text-2xl font-bold">
            {offer}
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={startScratching}
          onMouseUp={stopScratching}
          onMouseOut={stopScratching}
          onMouseMove={scratch}
          onTouchStart={startScratching}
          onTouchEnd={stopScratching}
          onTouchMove={scratch}
          className="cursor-pointer absolute inset-0"
          aria-label="Scratch card. Click and drag to reveal offer."
          role="img"
        />
      </div>
      {isRevealed && !isClaimed && (
        <button onClick={handleClaim} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Claim Offer
        </button>
      )}
      {isClaimed && <p className="mt-4 text-green-600 font-bold">Offer Claimed!</p>}
      <div className="mt-2 text-sm text-gray-600" aria-live="polite">
        {scratchPercentage < 70
          ? `Keep scratching! ${Math.round(scratchPercentage)}% revealed.`
          : isRevealed
            ? "Offer revealed! Click 'Claim Offer' to redeem."
            : ""}
      </div>
    </div>
  )
}

export default ScratchCard

