// @todo: Темплейт карточки
const cardTemplate = document.getElementById('card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(data, handleDelete) {
  const cardElement = cardTemplate.cloneNode(true).querySelector('.places__item'); // Получаем элемент карточки
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // Обработчик для кнопки удаления карточки
  deleteButton.addEventListener('click', () => {
    handleDelete(cardElement); // Вызываем функцию удаления
  });

  return cardElement; // Возвращаем созданный элемент карточки
}

// @todo: Функция вывода карточек на страницу
function renderCards() {
  initialCards.forEach(cardData => {
    const card = createCard(cardData, (cardElement) => {
      cardElement.remove(); // Удаляем элемент карточки из DOM
    });
    placesList.append(card); // Добавляем карточку в список
  });
}

// Выводим карточки на страницу
renderCards();
