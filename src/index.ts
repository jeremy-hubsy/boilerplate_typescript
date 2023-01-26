import { Category, payments, Spendings, SpendingsPerCat } from "./seed";
import { Payment } from "./seed";
import { totalPerCategory } from "./utils";
import { getPreviousMonth } from "./utils";
import { getObjectKeys } from "./utils";

export function getPayments(userId: number): Payment[] | [] {
  const userPayments = payments.filter((element) => element.userId === userId);
  return userPayments.length ? userPayments : [];
}

export function getMonthlyPayments(userId: number): Spendings {
  const userPayments = getPayments(userId);
  // dates
  const today: Date = new Date();
  const currentMonth: number = today.getMonth();
  const previousMonth: number = getPreviousMonth(today);

  const spendingCurrentMonth: Payment[] = userPayments.filter(
    (element) => currentMonth === element.date.getMonth()
  );
  const spendingPreviousMonth: Payment[] = userPayments.filter(
    (element) => previousMonth === new Date(element.date).getMonth()
  );

  return {
    spendingCurrentMonth,
    spendingPreviousMonth,
  };
}

export function getSpendingsPerCategory(userId: number): SpendingsPerCat {
  const { spendingCurrentMonth, spendingPreviousMonth } =
    getMonthlyPayments(userId);

  const currSpendings: Record<number, Category> =
    totalPerCategory(spendingCurrentMonth);

  const prevSprendings: Record<number, Category> = totalPerCategory(
    spendingPreviousMonth
  );

  return {
    totalCurrentMonth: currSpendings,
    totalPreviousMonth: prevSprendings,
  };
}

export function unusualSpendings(userId: number): SpendingsPerCat {
  const { totalCurrentMonth, totalPreviousMonth } =
    getSpendingsPerCategory(userId);

  const obj = getObjectKeys(payments);

  for (let cat in obj) {
    totalCurrentMonth[cat] >= totalPreviousMonth[cat] * 1.5
      ? (obj[cat] = totalCurrentMonth[cat])
      : obj[cat];
  }

  return {
    totalCurrentMonth: obj,
  };
}

export function composeEmail(userId: number): string | null {
  const obj: Record<number, Category> =
    unusualSpendings(userId).totalCurrentMonth;

  let totalExpenses = 0;

  for (let cat in obj) {
    totalExpenses += +obj[cat];
  }

  if (totalExpenses) {
    return `Subject : Unusual spending of $${totalExpenses} detected! Hello card user! We have detected unusually high spending on your card in these categories: ${
      obj["Loisir"] ? `* You spent ${obj["Loisir"]} on loisir` : null
    } ${
      obj["Education"] ? `* You spent ${obj["Education"]} on education` : ""
    } ${
      obj["Restaurant"] ? `* You spent ${obj["Restaurant"]} on restaurant` : ""
    } Love, The Credit Card Company`;
  }
  return null;
}
