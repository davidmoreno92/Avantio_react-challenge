import { PictureType } from "./picture-type";

export type AccomodationType = {
  name: string;
  address: string;
  description: string;
  type: string;
  photos: PictureType[];
};

export enum TypeOptions {
  Apartment = "apartment",
  Villa = "villa",
  House = "house",
}
