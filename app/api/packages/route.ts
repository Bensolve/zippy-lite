import { NextResponse } from 'next/server';
import { PackageFormData } from '@/app/types/package';

export async function POST(request: Request) {
  try {
    const body: PackageFormData = await request.json();
    
    // Validate required fields
    const requiredFields: (keyof PackageFormData)[] = [
      'senderName', 'senderPhone', 'receiverName', 'receiverPhone',
      'pickupLocation', 'deliveryLocation', 'packageType', 'status'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          message: 'Missing required fields',
          missingFields: missingFields
        },
        { status: 400 }
      );
    }

    // TODO: In a real application, you would:
    // 1. Save the package to a database
    // 2. Generate a unique tracking ID
    // 3. Handle any other business logic
    // 4. Send notifications to sender/receiver
    // 5. Integrate with courier services

    // For testing, we'll just return a success response
    return NextResponse.json({
      message: 'Package created successfully',
      package: {
        id: Math.random().toString(36).substring(7), // Temporary ID generation
        ...body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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