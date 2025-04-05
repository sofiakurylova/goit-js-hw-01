function getShippingMessage(country, price, deliveryFree) {
  const totalPrice = price + deliveryFree;
  // функция принимает три параметра: country, price и deliveryFree
  return `Shipping to ${country} will cost ${totalPrice} credits`;
  // вычисляет общую стоимость доставки и возвращает результат в виде текста
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// Примеры использования функции
