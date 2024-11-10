export interface RequestData {
  id: string;
  unit: string;
  location: string;
  problem: string;
  image?: URL;
  createdAt: Date;
  status: 'pending' | 'completed';
}

export interface TenantData {
  id: string;
  name: string;
  phone: string;
  email: string;
  checkin: Date;
  checkout: Date;
  unit: string;
}
