import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Invalid message' },
        { status: 400 }
      );
    }

    const aiResponse = await generateAIResponse(message);

    return NextResponse.json({
      success: true,
      message: aiResponse,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function generateAIResponse(userMessage: string): Promise<string> {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'Anda adalah asisten AI yang helpful dan ramah. Jawab dalam Bahasa Indonesia.',
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
    model: 'llama-3.3-70b-versatile',
  });

  return response.choices[0].message.content || 'Tidak ada respons';
}