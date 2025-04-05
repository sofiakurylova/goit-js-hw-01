function makeTransaction(quantity, pricePerDroid) {
  // функция принимает два параметра: quantity и pricePerDroid
  const totalPrice = quantity * pricePerDroid;
  // вычисляет общую стоимость заказа и возвращает результат в виде текста
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
// Примеры использования функции
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
