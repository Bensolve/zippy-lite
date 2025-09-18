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
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Package</h1>
        <p className="text-gray-600">
          Fill in the details to create a new delivery entry for your courier service.
        </p>
      </div>
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