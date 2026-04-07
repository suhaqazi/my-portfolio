import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to send" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}