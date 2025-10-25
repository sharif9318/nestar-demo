export const propertySquare: number[] = [
  0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
  800, 850, 900, 950, 1000,
];

export const propertyTypes: string[] = ["APARTMENT", "HOUSE", "VILLA"];

export const locations: string[] = [
  "SEOUL",
  "BUSAN",
  "DAEGU",
  "INCHEON",
  "GWANGJU",
];

export const roomOptions: string[] = ["Any", "1", "2", "3", "4", "5+"];
export const bedroomOptions: string[] = ["Any", "1", "2", "3", "4", "5+"];

export interface PriceRange {
  start: number;
  end: number;
}

export interface FilterState {
  searchText: string;
  location: string[];
  propertyType: string[];
  rooms: string;
  bedrooms: string;
  priceRange: PriceRange;
  squareRange: { min: number; max: number };
  options: {
    barter: boolean;
    rent: boolean;
  };
}
