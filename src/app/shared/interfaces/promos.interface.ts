export interface Promo {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price_x_30: number | null;
  price_x_45: number | null;
  price_x_60: number | null;
}
