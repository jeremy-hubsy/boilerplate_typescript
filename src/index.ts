import { payments } from "./seed";
import { Category } from "./seed";
import { Payment } from "./seed";

export function getPayments(userId: number) {
  const userPayments = payments.filter((element) => element.userId === userId);
  return userPayments.length ? userPayments : [];
}

export function getMonthlyPayments(userId: number) {
  const userPayments = getPayments(userId);
  // dates
  const today = new Date();
  const currentMonth = new Date().getMonth();
  const previousMonth = getPreviousMonth(today);

  const spendingCurrentMonth = userPayments.filter(
    (element) => currentMonth === element.date.getMonth()
  );
  const spendingPreviousMonth = userPayments.filter(
    (element) => previousMonth === new Date(element.date).getMonth()
  );

  return {
    spendingCurrentMonth,
    spendingPreviousMonth,
  };
}

export function getSpendingsPerCategory(userId: number) {
  const { spendingCurrentMonth, spendingPreviousMonth } =
    getMonthlyPayments(userId);

  const loisirCurrentMonth = totalPerCategory(spendingCurrentMonth, "Loisir");
  const educationCurrentMonth = totalPerCategory(
    spendingCurrentMonth,
    "Education"
  );

  const restaurantCurrentMonth = totalPerCategory(
    spendingCurrentMonth,
    "Restaurant"
  );

  const loisirPreviousMonth = totalPerCategory(spendingPreviousMonth, "Loisir");
  const educationPreviousMonth = totalPerCategory(
    spendingPreviousMonth,
    "Education"
  );

  const restaurantPreviousMonth = totalPerCategory(
    spendingPreviousMonth,
    "Restaurant"
  );

  return {
    totalCurrentMonth: {
      loisirCurrentMonth,
      educationCurrentMonth,
      restaurantCurrentMonth,
    },
    totalPreviousMonth: {
      loisirPreviousMonth,
      educationPreviousMonth,
      restaurantPreviousMonth,
    },
  };
}

export function unusualSpendings(userId: number) {
  const { totalCurrentMonth, totalPreviousMonth } =
    getSpendingsPerCategory(userId);

  let loisir = 0;
  let education = 0;
  let restaurant = 0;

  if (
    totalCurrentMonth.loisirCurrentMonth >=
    totalPreviousMonth.loisirPreviousMonth * 1.5
  ) {
    loisir = totalCurrentMonth.loisirCurrentMonth;
  }

  if (
    totalCurrentMonth.educationCurrentMonth >=
    totalPreviousMonth.educationPreviousMonth * 1.5
  ) {
    education = totalCurrentMonth.educationCurrentMonth;
  }

  if (
    totalCurrentMonth.restaurantCurrentMonth >=
    totalPreviousMonth.restaurantPreviousMonth * 1.5
  ) {
    restaurant = totalCurrentMonth.restaurantCurrentMonth;
  }

  return {
    loisir,
    education,
    restaurant,
  };
}

export function composeEmail(userId: number) {
  const { loisir, education, restaurant } = unusualSpendings(userId);

  const totalExpenses = loisir + education + restaurant;

  if (totalExpenses) {
    return `Subject : Unusual spending of $${totalExpenses} detected! Hello card user! We have detected unusually high spending on your card in these categories: ${
      loisir ? `* You spent ${loisir} on loisir` : null
    } ${education ? `* You spent ${education} on education` : ""} ${
      restaurant ? `* You spent ${restaurant} on restaurant` : ""
    } Love, The Credit Card Company`;
  }
  return null;
}

function totalPerCategory(spendings, category) {
  return spendings
    .filter((element) => element.category === category)
    .reduce((acc, curr) => acc + curr.price, 0);
}

function getPreviousMonth(d) {
  var newMonth = d.getMonth() - 1;
  if (newMonth < 0) {
    newMonth += 12;
    d.setYear(d.getFullYear() - 1); // use getFullYear instead of getYear !
  }
  d.setMonth(newMonth);

  return d.getMonth();
}
