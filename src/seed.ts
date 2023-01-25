export type Payment = {
  userId: number;
  price: number;
  description: string;
  category: Category;
  date: Date;
};

export type Category = "Loisir" | "Education" | "Restaurant";

const payments: Payment[] = [
  {
    category: "Loisir",
    price: 91,
    date: new Date("2022-12-26T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Education",
    price: 36,
    date: new Date("2022-12-11T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 61,
    date: new Date("2022-12-14T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 90,
    date: new Date("2022-11-18T10:58:18.363Z"),
    description: "",
    userId: 2,
  },
  {
    category: "Restaurant",
    price: 67,
    date: new Date("2022-11-09T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Education",
    price: 68,
    date: new Date("2022-12-02T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Education",
    price: 27,
    date: new Date("2022-12-10T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 26,
    date: new Date("2022-12-06T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 77,
    date: new Date("2022-11-27T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 230,
    date: new Date("2023-01-12T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Education",
    price: 59,
    date: new Date("2022-12-26T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 65,
    date: new Date("2022-12-02T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 15,
    date: new Date("2022-10-30T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 36,
    date: new Date("2023-01-02T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 24,
    date: new Date("2022-11-22T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Loisir",
    price: 92,
    date: new Date("2022-12-24T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Loisir",
    price: 52,
    date: new Date("2022-11-27T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Education",
    price: 54,
    date: new Date("2022-11-04T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Restaurant",
    price: 24,
    date: new Date("2023-01-07T10:58:18.363Z"),
    description: "",
    userId: 2,
  },
  {
    category: "Loisir",
    price: 92,
    date: new Date("2022-12-23T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 83,
    date: new Date("2022-12-30T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Loisir",
    price: 54,
    date: new Date("2023-01-24T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 62,
    date: new Date("2022-12-17T10:58:18.363Z"),
    description: "",
    userId: 2,
  },
  {
    category: "Restaurant",
    price: 9,
    date: new Date("2022-12-26T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
  {
    category: "Restaurant",
    price: 29,
    date: new Date("2022-11-23T10:58:18.363Z"),
    description: "",
    userId: 2,
  },
  {
    category: "Restaurant",
    price: 55,
    date: new Date("2022-11-16T10:58:18.363Z"),
    description: "",
    userId: 2,
  },
  {
    category: "Restaurant",
    price: 80,
    date: new Date("2022-11-12T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Loisir",
    price: 78,
    date: new Date("2023-01-14T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Loisir",
    price: 49,
    date: new Date("2022-10-31T10:58:18.363Z"),
    description: "",
    userId: 1,
  },
  {
    category: "Loisir",
    price: 46,
    date: new Date("2022-12-26T10:58:18.363Z"),
    description: "",
    userId: 3,
  },
];

export { payments };
