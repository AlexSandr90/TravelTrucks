export interface GalleryTypes {
  thumb: string;
  original: string;
}

export interface ReviewsTypes {
  reviewer_name: string;
  reviewer_rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery?: GalleryTypes[];
  reviews?: ReviewsTypes[];
}
