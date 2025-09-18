'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Package } from '@/app/types/package';
import { PackageStorageService } from '@/app/services/packageStorage';

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const storedPackages = await PackageStorageService.getPackages();
        setPackages(storedPackages);
      } catch (error) {
        console.error('Error loading packages:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPackageTypeColor = (type: string) => {
    switch (type) {
      case 'Fragile':
        return 'bg-red-100 text-red-800';
      case 'Electronics':
        return 'bg-purple-100 text-purple-800';
      case 'Document':
        return 'bg-blue-100 text-blue-800';
      case 'Clothing':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-600">Loading packages...</div>
        </div>
      </div>
    );
  }

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
      
      {packages.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">No packages yet. Create your first package!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {pkg.senderName} → {pkg.receiverName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    ID: {pkg.id}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pkg.status)}`}>
                    {pkg.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPackageTypeColor(pkg.packageType)}`}>
                    {pkg.packageType}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Sender</h4>
                  <p className="text-gray-600">{pkg.senderName}</p>
                  <p className="text-gray-600">{pkg.senderPhone}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Receiver</h4>
                  <p className="text-gray-600">{pkg.receiverName}</p>
                  <p className="text-gray-600">{pkg.receiverPhone}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pickup</h4>
                  <p className="text-gray-600">{pkg.pickupLocation}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Delivery</h4>
                  <p className="text-gray-600">{pkg.deliveryLocation}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                Created: {new Date(pkg.createdAt).toLocaleString()}
                {pkg.updatedAt !== pkg.createdAt && (
                  <span className="ml-4">
                    Updated: {new Date(pkg.updatedAt).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 