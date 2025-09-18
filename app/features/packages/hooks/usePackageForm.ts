import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PackageFormData, PackageFormErrors, PackageType, PackageStatus } from '@/app/types/package';
import { PackageStorageService } from '@/app/services/packageStorage';

const initialFormData: PackageFormData = {
  senderName: '',
  senderPhone: '',
  receiverName: '',
  receiverPhone: '',
  pickupLocation: '',
  deliveryLocation: '',
  packageType: 'Parcel',
  status: 'Pending',
};

// Regular expression for valid name format (letters, spaces, periods, and hyphens)
const validNameRegex = /^[A-Za-z\s.-]+$/;
// Phone number regex (supports various formats)
const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
// Maximum length for names
const MAX_NAME_LENGTH = 50;
// Maximum length for locations
const MAX_LOCATION_LENGTH = 100;

export function usePackageForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<PackageFormData>(initialFormData);
  const [errors, setErrors] = useState<PackageFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: PackageFormErrors = {};
    let isValid = true;

    // Validate sender name
    if (!formData.senderName.trim()) {
      newErrors.senderName = 'Sender name is required';
      isValid = false;
    } else if (!validNameRegex.test(formData.senderName)) {
      newErrors.senderName = 'Sender name can only contain letters, spaces, periods, and hyphens';
      isValid = false;
    } else if (formData.senderName.length > MAX_NAME_LENGTH) {
      newErrors.senderName = `Sender name must be ${MAX_NAME_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate sender phone
    if (!formData.senderPhone.trim()) {
      newErrors.senderPhone = 'Sender phone is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.senderPhone.replace(/\s/g, ''))) {
      newErrors.senderPhone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Validate receiver name
    if (!formData.receiverName.trim()) {
      newErrors.receiverName = 'Receiver name is required';
      isValid = false;
    } else if (!validNameRegex.test(formData.receiverName)) {
      newErrors.receiverName = 'Receiver name can only contain letters, spaces, periods, and hyphens';
      isValid = false;
    } else if (formData.receiverName.length > MAX_NAME_LENGTH) {
      newErrors.receiverName = `Receiver name must be ${MAX_NAME_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate receiver phone
    if (!formData.receiverPhone.trim()) {
      newErrors.receiverPhone = 'Receiver phone is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.receiverPhone.replace(/\s/g, ''))) {
      newErrors.receiverPhone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Validate pickup location
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
      isValid = false;
    } else if (formData.pickupLocation.length > MAX_LOCATION_LENGTH) {
      newErrors.pickupLocation = `Pickup location must be ${MAX_LOCATION_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate delivery location
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery location is required';
      isValid = false;
    } else if (formData.deliveryLocation.length > MAX_LOCATION_LENGTH) {
      newErrors.deliveryLocation = `Delivery location must be ${MAX_LOCATION_LENGTH} characters or less`;
      isValid = false;
    }

    // Validate package type
    if (!formData.packageType) {
      newErrors.packageType = 'Package type is required';
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
      // Use localStorage service instead of API for now
      const newPackage = await PackageStorageService.createPackage(formData);
      
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