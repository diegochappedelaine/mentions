export const randomElementFromArray = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)];
