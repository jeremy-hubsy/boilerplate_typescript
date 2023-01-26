import { Category } from "./seed";
import { Payment } from "./seed";

export function totalPerCategory(arr) {
  return Array.from(
    arr.reduce(
      (m, { category, price }) =>
        m.set(category, (m.get(category) || 0) + price),
      new Map()
    ),
    ([category, price]) => ({ category, price })
  ).reduce((acc, val) => {
    acc[val.category] = val.price;
    return acc;
  }, {});
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

export function getObjectKeys(payments) {
  return payments.reduce((acc, val) => {
    acc[val.category] = 0;
    return acc;
  }, {});
}
