export type FormType = {
  name: string;
  address: string;
  description: string;
  type: string;
  files: string[];
  owner: OwnerType;
};

export type OwnerType = {
  name: string;
  email: string;
  phone: number | undefined;
};

export enum TypeOptions {
  Apartment = "apartment",
  Villa = "villa",
  House = "house",
}
