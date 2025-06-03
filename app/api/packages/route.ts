import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.sender || !body.receiver || !body.status) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: In a real application, you would:
    // 1. Save the package to a database
    // 2. Generate a unique tracking ID
    // 3. Handle any other business logic

    // For testing, we'll just return a success response
    return NextResponse.json({
      message: 'Package created successfully',
      package: {
        id: Math.random().toString(36).substring(7), // Temporary ID generation
        ...body,
        createdAt: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error creating package:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 