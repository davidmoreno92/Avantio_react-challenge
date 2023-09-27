import { PictureType } from "./picture-type";

export type AccomodationType = {
  name: string;
  address: string;
  description: string;
  type: string;
  photos: PictureType[];
};
