
export type Product = {
  id: string;
  name: string;
  image: string;
  categoryID: string;
  quantity: string;
  price: number;
};

export const products: Product[] = [
  // DAIRY - Category 1
  {
    id: "prod-1",
    name: "Amul Fresh Milk",
    image: "https://placehold.co/300x300?text=Milk",
    categoryID: "1",
    quantity: "500 ml",
    price: 30,
  },
  {
    id: "prod-2",
    name: "Amul Butter",
    image: "https://placehold.co/300x300?text=Butter",
    categoryID: "1",
    quantity: "100 g",
    price: 60,
  },
  {
    id: "prod-3",
    name: "Fresh Paneer",
    image: "https://placehold.co/300x300?text=Paneer",
    categoryID: "1",
    quantity: "200 g",
    price: 95,
  },
  {
    id: "prod-4",
    name: "Greek Yogurt",
    image: "https://placehold.co/300x300?text=Yogurt",
    categoryID: "1",
    quantity: "400 g",
    price: 120,
  },

  // FRUITS - Category 2
  {
    id: "prod-5",
    name: "Fresh Bananas",
    image: "https://placehold.co/300x300?text=Bananas",
    categoryID: "2",
    quantity: "6 pcs",
    price: 45,
  },
  {
    id: "prod-6",
    name: "Red Apples",
    image: "https://placehold.co/300x300?text=Apples",
    categoryID: "2",
    quantity: "1 kg",
    price: 180,
  },
  {
    id: "prod-7",
    name: "Sweet Oranges",
    image: "https://placehold.co/300x300?text=Oranges",
    categoryID: "2",
    quantity: "1 kg",
    price: 100,
  },

  // VEGETABLES - Category 3
  {
    id: "prod-8",
    name: "Fresh Tomatoes",
    image: "https://placehold.co/300x300?text=Tomatoes",
    categoryID: "3",
    quantity: "500 g",
    price: 35,
  },
  {
    id: "prod-9",
    name: "Potatoes",
    image: "https://placehold.co/300x300?text=Potatoes",
    categoryID: "3",
    quantity: "1 kg",
    price: 40,
  },
  {
    id: "prod-10",
    name: "Fresh Onions",
    image: "https://placehold.co/300x300?text=Onions",
    categoryID: "3",
    quantity: "1 kg",
    price: 45,
  },

  // BAKERY - Category 4
  {
    id: "prod-11",
    name: "Brown Bread",
    image: "https://placehold.co/300x300?text=Bread",
    categoryID: "4",
    quantity: "400 g",
    price: 55,
  },
  {
    id: "prod-12",
    name: "Chocolate Muffins",
    image: "https://placehold.co/300x300?text=Muffins",
    categoryID: "4",
    quantity: "4 pcs",
    price: 120,
  },
  {
    id: "prod-13",
    name: "Butter Croissant",
    image: "https://placehold.co/300x300?text=Croissant",
    categoryID: "4",
    quantity: "2 pcs",
    price: 90,
  },

  // SNACKS - Category 5
  {
    id: "prod-14",
    name: "Lays Classic Salted",
    image: "https://placehold.co/300x300?text=Lays",
    categoryID: "5",
    quantity: "52 g",
    price: 20,
  },
  {
    id: "prod-15",
    name: "Kurkure Masala Munch",
    image: "https://placehold.co/300x300?text=Kurkure",
    categoryID: "5",
    quantity: "75 g",
    price: 20,
  },
  {
    id: "prod-16",
    name: "Oreo Biscuits",
    image: "https://placehold.co/300x300?text=Oreo",
    categoryID: "5",
    quantity: "120 g",
    price: 40,
  },
  {
    id: "prod-17",
    name: "Cadbury Dairy Milk",
    image: "https://placehold.co/300x300?text=Chocolate",
    categoryID: "5",
    quantity: "50 g",
    price: 50,
  },

  // BEVERAGES - Category 6
  {
    id: "prod-18",
    name: "Coca Cola",
    image: "https://placehold.co/300x300?text=Coca+Cola",
    categoryID: "6",
    quantity: "750 ml",
    price: 45,
  },
  {
    id: "prod-19",
    name: "Tropicana Orange Juice",
    image: "https://placehold.co/300x300?text=Orange+Juice",
    categoryID: "6",
    quantity: "1 L",
    price: 120,
  },
  {
    id: "prod-20",
    name: "Red Bull Energy Drink",
    image: "https://placehold.co/300x300?text=Red+Bull",
    categoryID: "6",
    quantity: "250 ml",
    price: 125,
  },
];
