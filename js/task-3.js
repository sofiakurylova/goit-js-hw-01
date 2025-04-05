function getElementWidth(content, padding, border) {
  //функция принимает три аргумента: ширина контента, ширина отступов и ширина границы
  const contentWidth = parseFloat(content);
  //преобразуем строку в число с плавающей точкой
  const paddingWidth = parseFloat(padding);
  //преобразуем строку в число с плавающей точкой
  const borderWidth = parseFloat(border);
  //преобразуем строку в число с плавающей точкой
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return totalWidth;
  //возвращаем общую ширину элемента
}
// Примеры использования функции
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
