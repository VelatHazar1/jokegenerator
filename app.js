const button = document.querySelector(".button");
const jokesContent = document.querySelector(".content");

const getJokes = async () => {
  const header = { headers: { Accept: "application/json" } };
  const response = await fetch("https://icanhazdadjoke.com/", header);
  const data = response.json();
  return data;
};

const click = async () => {
  const joke = await getJokes();
  jokesContent.textContent = joke.joke;
};

button.addEventListener("click", click);
