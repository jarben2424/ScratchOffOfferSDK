import ScratchCard from "../components/ScratchCard"

async function getOffer() {
  // In a real application, you would fetch this from an external API
  // For now, we'll just return a static offer
  return "25% OFF ON A BURGER"
}

export default async function ScratchCardPage() {
  const offer = await getOffer()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ScratchCard offer={offer} width={300} height={150} />
    </div>
  )
}

