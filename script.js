/*
 * - Пагінація
 1. Отримати посилання на елементи
 2. Зробити запит за новинами, зробити ф-ю, яка буде шукати articles
 * - вказати параметри сторінка і кількість на сторінці
 4. Обробка submit форми - Завантажуємо статті при надсиланні форми
 5.  Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо сторінку в параметрах запиту
 3. Створити ф-ю renderMarkup - Малюємо статті
 * - Скидаємо значення при пошуку за новим критерієм

// ДОДАТКОВО
// Валідація інпуту
// Налаштувати появу і зникненя кнопки load more
// Налаштувати спінер
// Слідкувати за правильною сторінкою(скидати значення page)
 *
 
 */
const newsContainer = document.querySelector(".js-articles-container");
const searchForm = document.querySelector(".js-search-form");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const newsTempl = document.querySelector("#news-templ");
const spinner = loadMoreBtn.querySelector(".spinner");

const API_KEY = "63b49d15e6b14a38af4ace44ca78dbea";
const BASE_URL = "https://newsapi.org/v2";
const options = {
  headers: {
    Authorization: API_KEY,
  },
};
let query = "cat";
let page = 1;

function fetchArticles() {
    return fetch(`${BASE_URL}/everything?q=${query}&pageSize=15&page=${page}`,options)
.then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}

fetchArticles()