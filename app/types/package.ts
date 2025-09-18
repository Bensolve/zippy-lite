export type PackageStatus = 'Pending' | 'In Transit' | 'Delivered' | 'Cancelled';

export type PackageType = 'Document' | 'Parcel' | 'Fragile' | 'Electronics' | 'Clothing' | 'Other';

export interface PackageFormData {
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  pickupLocation: string;
  deliveryLocation: string;
  packageType: PackageType;
  status: PackageStatus;
}

export interface PackageFormErrors {
  senderName?: string;
  senderPhone?: string;
  receiverName?: string;
  receiverPhone?: string;
  pickupLocation?: string;
  deliveryLocation?: string;
  packageType?: string;
  status?: string;
}

export interface Package extends PackageFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
}
