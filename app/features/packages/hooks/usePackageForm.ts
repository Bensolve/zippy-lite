import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

type PackageStatus = 'Pending' | 'In Transit' | 'Delivered';

export type PackageFormData = {
  sender: string;
  receiver: string;
  status: PackageStatus;
};

type PackageFormErrors = {
  sender?: string;
  receiver?: string;
  status?: string;
};

const initialFormData: PackageFormData = {
  sender: '',
  receiver: '',
  status: 'Pending',
};

// Regular expression for valid name format (letters, spaces, periods, and hyphens)
const validNameRegex = /^[A-Za-z\s.-]+$/;
// Maximum length for names
const MAX_NAME_LENGTH = 50;

export function usePackageForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<PackageFormData>(initialFormData);
  const [errors, setErrors] = useState<PackageFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: PackageFormErrors = {};
    let isValid = true;

    // Validate sender
    if (!formData.sender.trim()) {
      newErrors.sender = 'Sender is required';
      isValid = false;
    } else if (!validNameRegex.test(formData.sender)) {
      newErrors.sender = 'Sender name can only contain letters, spaces, periods, and hyphens';
      isValid = false;
    } else if (formData.sender.length > MAX_NAME_LENGTH) {
      newErrors.sender = `Sender name must be ${MAX_NAME_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate receiver
    if (!formData.receiver.trim()) {
      newErrors.receiver = 'Receiver is required';
      isValid = false;
    } else if (!validNameRegex.test(formData.receiver)) {
      newErrors.receiver = 'Receiver name can only contain letters, spaces, periods, and hyphens';
      isValid = false;
    } else if (formData.receiver.length > MAX_NAME_LENGTH) {
      newErrors.receiver = `Receiver name must be ${MAX_NAME_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate status
    if (!formData.status) {
      newErrors.status = 'Status is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof PackageFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Clear submit error when form changes
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create package');
      }

      const data = await response.json();
      
      // Reset form after successful submission
      resetForm();
      
      // Redirect to the packages list page
      router.push('/packages');
      
      // Show success message (you might want to implement a toast notification system)
      alert('Package created successfully!');
    } catch (error) {
      console.error('Error submitting package:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to create package');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError(null);
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  };
} 