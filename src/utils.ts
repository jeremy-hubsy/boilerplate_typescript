import { Category } from "./seed";
import { Payment } from "./seed";

export function totalPerCategory(
  spendings: Payment[],
  category: Category
): number {
  return spendings
    .filter((element) => element.category === category)
    .reduce((acc, curr) => acc + curr.price, 0);
}

export function getPreviousMonth(d: Date): number {
  var newMonth = d.getMonth() - 1;
  if (newMonth < 0) {
    newMonth += 12;
    d.setFullYear(d.getFullYear() - 1);
  }
  d.setMonth(newMonth);

  return d.getMonth();
}
