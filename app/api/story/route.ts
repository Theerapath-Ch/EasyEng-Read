import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    // console.log("API HIT")
    const story = await prisma.story.findMany()
    return NextResponse.json(story)
}