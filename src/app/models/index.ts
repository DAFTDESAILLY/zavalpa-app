// models/company.model.ts
export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
  contact: ContactInfo;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

// models/service.model.ts
export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  icon: string;
  features: string[];
  isActive: boolean;
}

export type ServiceCategory = 
  | 'comercio-exterior' 
  | 'logistica' 
  | 'consultoria' 
  | 'servicios-tecnicos';

// models/product.model.ts
export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  specifications: string[];
  imageUrl?: string;
  isActive: boolean;
}

export type ProductCategory = 'bolsas-carteras' | 'papeleria' | 'textiles-calzado' | 'textiles-tapiceria' | 'armazones' | 'muebles-oficina';

// models/user.model.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'internal' | 'external';

// models/navigation.model.ts
export interface NavItem {
  label: string;
  route: string;
  icon?: string;
  children?: NavItem[];
  requiresAuth?: boolean;
  roles?: UserRole[];
}
