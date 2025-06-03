'use client';

import { ChangeEvent, FormEvent } from 'react';

type PackageFormData = {
  sender: string;
  receiver: string;
  status: 'Pending' | 'In Transit' | 'Delivered';
};

type PackageFormErrors = {
  sender?: string;
  receiver?: string;
  status?: string;
};

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
      
      {/* Sender Field */}
      <div>
        <label
          htmlFor="sender"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Sender
        </label>
        <input
          type="text"
          id="sender"
          name="sender"
          value={formData.sender}
          onChange={onChange}
          className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
            errors.sender
              ? 'border-red-300 text-red-900 placeholder-red-300'
              : 'border-gray-300'
          }`}
          aria-invalid={errors.sender ? 'true' : 'false'}
          aria-describedby={errors.sender ? 'sender-error' : undefined}
        />
        {errors.sender && (
          <p className="mt-1 text-sm text-red-600" id="sender-error">
            {errors.sender}
          </p>
        )}
      </div>

      {/* Receiver Field */}
      <div>
        <label
          htmlFor="receiver"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Receiver
        </label>
        <input
          type="text"
          id="receiver"
          name="receiver"
          value={formData.receiver}
          onChange={onChange}
          className={`w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
            errors.receiver
              ? 'border-red-300 text-red-900 placeholder-red-300'
              : 'border-gray-300'
          }`}
          aria-invalid={errors.receiver ? 'true' : 'false'}
          aria-describedby={errors.receiver ? 'receiver-error' : undefined}
        />
        {errors.receiver && (
          <p className="mt-1 text-sm text-red-600" id="receiver-error">
            {errors.receiver}
          </p>
        )}
      </div>

      {/* Status Field */}
      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status
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
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-600" id="status-error">
            {errors.status}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        }`}
      >
        {isSubmitting ? 'Creating...' : 'Create Package'}
      </button>
    </form>
  );
} 