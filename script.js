let input = document.querySelector(".input");
let form = document.querySelector(".inputBlock");
let content = document.querySelector(".content");
let title = document.querySelector(".titleInner");
let titleBlock = document.querySelector(".titleBlock");

const ACCESS_KEY = "oIn7A0KLbzLYqryvzDNTkYBszsOjxqO-CtY8ux1HKl4";
const SECRET_KEY = "Dyll6aT1rRcjlwzTlw_m1EDSM-3HAOHF0zP8nvr2-SE";
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${ACCESS_KEY}`;

const search = async (searchTerm) => {
  let url = `${API_URL}&query=${searchTerm}`;
  const response = await fetch(url);
  const result_1 = await response.json();

  return result_1.results;
};

const displayImages = (images) => {
  if (images.length > 0) {
    title.innerHTML = `Поиск по запросу "${input.value}"`;
  } else {
    title.innerHTML = `Поиск по запросу "${input.value}" ничего не найдено`;
  }
  images.forEach((image) => {
    let imageWrapper = document.createElement("div");
    let imageElement = document.createElement("img");
    imageWrapper.className = "imageBox"
    imageElement.src = image.urls.regular;
    imageWrapper.appendChild(imageElement)
    content.appendChild(imageWrapper);
  });
};

const formSubmitted = (event) => {
  event.preventDefault();
  let searchTerm = input.value;
  clearContainer();
  search(searchTerm).then(displayImages);
};

const clearContainer = () => {
  content.innerHTML = "";
};
form.addEventListener("submit", formSubmitted);
