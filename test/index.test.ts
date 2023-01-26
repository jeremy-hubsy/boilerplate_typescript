import { getPayments } from "../src";
import { getMonthlyPayments } from "../src";
import { getSpendingsPerCategory } from "../src";
import { unusualSpendings } from "../src";
import { composeEmail } from "../src";

describe("getPayments", () => {
  it("should return an empty array for user who does not exist", () => {
    expect(getPayments(4)).toEqual([]);
  });
  it("should return payments for user 1", () => {
    expect(getPayments(1)).toEqual([
      {
        category: "Loisir",
        price: 91,
        date: new Date("2022-12-26T10:58:18.363Z"),
        description: "",
        userId: 1,
      },
      {
        category: "Loisir",
        price: 91,
        date: new Date("2021-12-26T10:58:18.363Z"),
        description: "",
        userId: 1,
      },
      {
        category: "Education",
        price: 68,
        date: new Date("2022-12-02T10:58:18.363Z"),
        description: "",
        userId: 1,
      },
      {
        category: "Loisir",
        price: 230,
        date: new Date("2023-01-12T10:58:18.363Z"),
        description: "",
        userId: 1,
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
        price: 83,
        date: new Date("2022-12-30T10:58:18.363Z"),
        description: "",
        userId: 1,
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
    ]);
  });
});

describe("getMonthlyPayments", () => {
  it("should return the payment for current month and previous month", () => {
    expect(getMonthlyPayments(1)).toEqual({
      spendingCurrentMonth: [
        {
          category: "Loisir",
          price: 230,
          date: new Date("2023-01-12T10:58:18.363Z"),
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
      ],
      spendingPreviousMonth: [
        {
          category: "Loisir",
          price: 91,
          date: new Date("2022-12-26T10:58:18.363Z"),
          description: "",
          userId: 1,
        },
        {
          category: "Education",
          price: 68,
          date: new Date("2022-12-02T10:58:18.363Z"),
          description: "",
          userId: 1,
        },
        {
          category: "Restaurant",
          price: 83,
          date: new Date("2022-12-30T10:58:18.363Z"),
          description: "",
          userId: 1,
        },
      ],
    });
  });
});

describe("highestExpenses", () => {
  it("should return the total per category", () => {
    expect(getSpendingsPerCategory(1)).toEqual({
      totalCurrentMonth: {
        Loisir: 308,
      },
      totalPreviousMonth: {
        Loisir: 91,
        Education: 68,
        Restaurant: 83,
      },
    });
  });
});

describe("unusualSpendings", () => {
  it("should return the categories for which the user spent at least 50% more this month than last month", () => {
    expect(unusualSpendings(1)).toEqual({
      totalCurrentMonth: {
        Loisir: 308,
        Education: 0,
        Restaurant: 0,
      },
    });
  });
});

describe("composeEmail", () => {
  it("should return the email ", () => {
    expect(composeEmail(1)).toEqual(
      `Subject : Unusual spending of $308 detected! Hello card user! We have detected unusually high spending on your card in these categories: * You spent 308 on loisir   Love, The Credit Card Company`
    );
  });
});
