export interface propertyType {
  price_pcm: number;
  price_pw: number;
  title: string;
  address: string;
  created_on: string;
  image: string;
  id: number;
}
export const properties: propertyType[] = [
  {
    price_pcm: 2400,
    price_pw: 600,
    title: "2 bed Apartment",
    address: "21 Camberwell Building, Hackney, London",
    created_on: "20/09/2023",
    image: require("../assets/images/property-1.jpeg"),
    id: 1,
  },
  {
    price_pcm: 3100,
    price_pw: 700,
    title: "2 bed Apartment",
    address: "21 Camberwell Building, Hackney, London",
    created_on: "20/09/2023",
    image: require("../assets/images/property-2.png"),
    id: 2,
  },
  {
    price_pcm: 2400,
    price_pw: 600,
    title: "2 bed Apartment",
    address: "21 Camberwell Building, Hackney, London",
    created_on: "20/09/2023",
    image: require("../assets/images/property-1.jpeg"),
    id: 3,
  },
  {
    price_pcm: 3100,
    price_pw: 700,
    title: "2 bed Apartment",
    address: "21 Camberwell Building, Hackney, London",
    created_on: "20/09/2023",
    image: require("../assets/images/property-2.png"),
    id: 4,
  },
];
