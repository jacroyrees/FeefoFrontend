export interface ReviewCardProps {
  rating: number;
  mode?: "primary" | "secondary";
  ratingsData: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}
