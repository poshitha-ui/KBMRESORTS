// models/property-card.model.ts
export interface PropertyCard {
  id: string;
  code: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  pricePerNight: number;
}
