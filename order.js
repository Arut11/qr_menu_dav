/*import React from 'react';
const __next = document.getElementById('__next');
const roolElement = createRoot(__next);
roolElement.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>
);*/

/*document.addEventListener('DOMContentLoaded', function() {
  const savedTotalPrice = localStorage.getItem('totalPrice');
  const costElement = document.querySelector('.order_total__2BUYE');
  costElement.innerHTML = `Итого ${savedTotalPrice} руб.`;
});*/

const priceBlocks = document.querySelectorAll('.order-item_productInfo__XZaxe');
const costElement = document.querySelector('.order_total__2BUYE'); 
let totalPrice = 0; // хранилище общей суммы

// Для каждого блока цены выполняем действия
priceBlocks.forEach((priceBlock) => {

  // Получаем элементы внутри текущего блока
  const priceElement = priceBlock.querySelector('.order-item_cost__1VpvP'); 
  const addButton = priceBlock.querySelector('.quantity-button_quantityButton__1KTbZ:last-child');
  const subtractButton = priceBlock.querySelector('.quantity-button_quantityButton__1KTbZ:first-child');
  const quantityElement = priceBlock.querySelector('.order-item_quantity__1-zIF');
  
  // Получаем изначальное значение цены и количества
  const priceValue = parseFloat(priceElement.innerText.replace(/[^\d.]/g, ''));
  const initialQuantityValue = parseInt(quantityElement.innerText);
  let quantityValue = initialQuantityValue;

  // Добавляем обработчик события при клике на кнопку добавления
  addButton.addEventListener('click', () => {
    quantityValue++; // Увеличиваем значение количества на 1
    quantityElement.innerText = quantityValue; // Обновляем значение количества на странице
    subtractButton.style.display = 'inline-block'; // Отображаем кнопку вычитания
    quantityElement.style.display = 'inline-block'; // Отображаем элемент с количеством

        totalPrice += priceValue;        // Обновляем общую сумму
    costElement.innerHTML = `Итого: ${totalPrice.toLocaleString('ru-RU')} руб.`; // Обновляем значение общей стоимости на кнопке снизу
  });


  // Добавляем обработчик события при клике на кнопку вычитания
  subtractButton.addEventListener('click', () => {
    if (quantityValue > 0) {
      quantityValue--; // Уменьшаем значение количества на 1
      quantityElement.innerText = quantityValue; // Обновляем значение количества на странице
   
      totalPrice -= priceValue;   // Обновляем общую сумму
      costElement.innerHTML = `Итого: ${totalPrice.toLocaleString('ru-RU')} руб.`; // Обновляем значение общей стоимости на кнопке внизу
    }

    if (quantityValue <= 0) {
      subtractButton.style.display = 'none'; // Скрываем кнопку вычитания
      quantityElement.style.display = 'none'; // Скрываем элемент с количеством
    }
  });

  // Если начальное значение количества меньше или равно 1, скрываем кнопку вычитания и элемент с количеством
  if (quantityValue <= 1) {
    subtractButton.style.display = 'none';
    quantityElement.style.display = 'none';
  }

});