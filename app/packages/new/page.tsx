'use client';

import { PackageFormUI } from '@/app/components/PackageFormUI';
import { usePackageForm } from '@/app/features/packages/hooks/usePackageForm';

export default function NewPackagePage() {
  const {
    formData,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
  } = usePackageForm();

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Package</h1>
      <p className="text-gray-600 mb-6">
        Fill in the details to create a new delivery entry.
      </p>
      <PackageFormUI
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        submitError={submitError}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 