'use client';

import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Packages</h1>
        <Link
          href="/packages/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Package
        </Link>
      </div>
      
      {/* Package list will go here */}
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">No packages yet. Create your first package!</p>
      </div>
    </div>
  );
} 