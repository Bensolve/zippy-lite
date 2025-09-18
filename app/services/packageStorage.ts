import { Package } from '@/app/types/package';

const STORAGE_KEY = 'zippy-packages';

export class PackageStorageService {
  private static getPackages(): Package[] {
    if (typeof window === 'undefined') {
      return [];
    }
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading packages from localStorage:', error);
      return [];
    }
  }

  private static savePackages(packages: Package[]): void {
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(packages));
    } catch (error) {
      console.error('Error saving packages to localStorage:', error);
    }
  }

  static async createPackage(packageData: Omit<Package, 'id' | 'createdAt' | 'updatedAt'>): Promise<Package> {
    const packages = this.getPackages();
    const now = new Date().toISOString();
    
    const newPackage: Package = {
      ...packageData,
      id: this.generateId(),
      createdAt: now,
      updatedAt: now,
    };
    
    packages.push(newPackage);
    this.savePackages(packages);
    
    return newPackage;
  }

  static async getPackages(): Promise<Package[]> {
    return this.getPackages();
  }

  static async getPackageById(id: string): Promise<Package | null> {
    const packages = this.getPackages();
    return packages.find(pkg => pkg.id === id) || null;
  }

  static async updatePackage(id: string, updates: Partial<PackageFormData>): Promise<Package | null> {
    const packages = this.getPackages();
    const index = packages.findIndex(pkg => pkg.id === id);
    
    if (index === -1) {
      return null;
    }
    
    packages[index] = {
      ...packages[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    this.savePackages(packages);
    return packages[index];
  }

  static async deletePackage(id: string): Promise<boolean> {
    const packages = this.getPackages();
    const filteredPackages = packages.filter(pkg => pkg.id !== id);
    
    if (filteredPackages.length === packages.length) {
      return false; // Package not found
    }
    
    this.savePackages(filteredPackages);
    return true;
  }

  private static generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
