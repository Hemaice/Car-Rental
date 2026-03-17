export interface Vehicle {
  id: number;
  name: string;
  type: string;
  description: string;
  seater_capacity: number;
  image_url: string;
  available: boolean;
  features: string[];
}

export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Innova",
    type: "SUV",
    description: "Comfortable SUV for long family trips.",
    seater_capacity: 7,
    image_url: "/vehicles/Toyota2.jpeg",
    available: true,
    features: ["AC", "Music System", "GPS"]
  },
  {
    id: 2,
    name: "Van",
    type: "Sedan",
    description: "Perfect sedan for city rides.",
    seater_capacity: 5,
    image_url: "/vehicles/Van.jpeg",
    available: true,
    features: ["AC", "tooth"]
  }
];