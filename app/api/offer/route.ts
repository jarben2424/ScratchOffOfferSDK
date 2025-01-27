import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you might fetch this from a database
  const offer = "25% OFF ON A BURGER"
  return NextResponse.json({ offer })
}

