'use client';

import { ChangeEvent, FormEvent } from 'react';
import { PackageFormData, PackageFormErrors, PackageType, PackageStatus } from '@/app/types/package';

type PackageFormUIProps = {
  formData: PackageFormData;
  errors: PackageFormErrors;
  isSubmitting: boolean;
  submitError?: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function PackageFormUI({
  formData,
  errors,
  isSubmitting,
  submitError,
  onChange,
  onSubmit,
}: PackageFormUIProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
      {submitError && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {submitError}
        </div>
      )}
      
      {/* Sender Information Section */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Sender Information</h3>
        
        {/* Sender Name */}
        <div className="mb-4">
          <label
            htmlFor="senderName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Sender Name *
          </label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            value={formData.senderName}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.senderName
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.senderName ? 'true' : 'false'}
            aria-describedby={errors.senderName ? 'senderName-error' : undefined}
            placeholder="Enter sender's full name"
          />
          {errors.senderName && (
            <p className="mt-1 text-sm text-red-600" id="senderName-error">
              {errors.senderName}
            </p>
          )}
        </div>

        {/* Sender Phone */}
        <div>
          <label
            htmlFor="senderPhone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Sender Phone *
          </label>
          <input
            type="tel"
            id="senderPhone"
            name="senderPhone"
            value={formData.senderPhone}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.senderPhone
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.senderPhone ? 'true' : 'false'}
            aria-describedby={errors.senderPhone ? 'senderPhone-error' : undefined}
            placeholder="Enter sender's phone number"
          />
          {errors.senderPhone && (
            <p className="mt-1 text-sm text-red-600" id="senderPhone-error">
              {errors.senderPhone}
            </p>
          )}
        </div>
      </div>

      {/* Receiver Information Section */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Receiver Information</h3>
        
        {/* Receiver Name */}
        <div className="mb-4">
          <label
            htmlFor="receiverName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Receiver Name *
          </label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={formData.receiverName}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.receiverName
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.receiverName ? 'true' : 'false'}
            aria-describedby={errors.receiverName ? 'receiverName-error' : undefined}
            placeholder="Enter receiver's full name"
          />
          {errors.receiverName && (
            <p className="mt-1 text-sm text-red-600" id="receiverName-error">
              {errors.receiverName}
            </p>
          )}
        </div>

        {/* Receiver Phone */}
        <div>
          <label
            htmlFor="receiverPhone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Receiver Phone *
          </label>
          <input
            type="tel"
            id="receiverPhone"
            name="receiverPhone"
            value={formData.receiverPhone}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.receiverPhone
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.receiverPhone ? 'true' : 'false'}
            aria-describedby={errors.receiverPhone ? 'receiverPhone-error' : undefined}
            placeholder="Enter receiver's phone number"
          />
          {errors.receiverPhone && (
            <p className="mt-1 text-sm text-red-600" id="receiverPhone-error">
              {errors.receiverPhone}
            </p>
          )}
        </div>
      </div>

      {/* Location Information Section */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Location Information</h3>
        
        {/* Pickup Location */}
        <div className="mb-4">
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pickup Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.pickupLocation
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.pickupLocation ? 'true' : 'false'}
            aria-describedby={errors.pickupLocation ? 'pickupLocation-error' : undefined}
            placeholder="Enter pickup address"
          />
          {errors.pickupLocation && (
            <p className="mt-1 text-sm text-red-600" id="pickupLocation-error">
              {errors.pickupLocation}
            </p>
          )}
        </div>

        {/* Delivery Location */}
        <div>
          <label
            htmlFor="deliveryLocation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Delivery Location *
          </label>
          <input
            type="text"
            id="deliveryLocation"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
              errors.deliveryLocation
                ? 'border-red-300 text-red-900 placeholder-red-300'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.deliveryLocation ? 'true' : 'false'}
            aria-describedby={errors.deliveryLocation ? 'deliveryLocation-error' : undefined}
            placeholder="Enter delivery address"
          />
          {errors.deliveryLocation && (
            <p className="mt-1 text-sm text-red-600" id="deliveryLocation-error">
              {errors.deliveryLocation}
            </p>
          )}
        </div>
      </div>

      {/* Package Details Section */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Package Details</h3>
        
        {/* Package Type */}
        <div className="mb-4">
          <label
            htmlFor="packageType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Package Type *
          </label>
          <select
            id="packageType"
            name="packageType"
            value={formData.packageType}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none ${
              errors.packageType
                ? 'border-red-300 text-red-900'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.packageType ? 'true' : 'false'}
            aria-describedby={errors.packageType ? 'packageType-error' : undefined}
          >
            <option value="Parcel" className="bg-white text-gray-900">Parcel</option>
            <option value="Document" className="bg-white text-gray-900">Document</option>
            <option value="Fragile" className="bg-white text-gray-900">Fragile</option>
            <option value="Electronics" className="bg-white text-gray-900">Electronics</option>
            <option value="Clothing" className="bg-white text-gray-900">Clothing</option>
            <option value="Other" className="bg-white text-gray-900">Other</option>
          </select>
          {errors.packageType && (
            <p className="mt-1 text-sm text-red-600" id="packageType-error">
              {errors.packageType}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status *
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none ${
              errors.status
                ? 'border-red-300 text-red-900'
                : 'border-gray-300'
            }`}
            aria-invalid={errors.status ? 'true' : 'false'}
            aria-describedby={errors.status ? 'status-error' : undefined}
          >
            <option value="Pending" className="bg-white text-gray-900">Pending</option>
            <option value="In Transit" className="bg-white text-gray-900">In Transit</option>
            <option value="Delivered" className="bg-white text-gray-900">Delivered</option>
            <option value="Cancelled" className="bg-white text-gray-900">Cancelled</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600" id="status-error">
              {errors.status}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        }`}
      >
        {isSubmitting ? 'Creating Package...' : 'Create Package'}
      </button>
    </form>
  );
} 