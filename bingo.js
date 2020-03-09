const nextButton = document.querySelector('#next-button');
const funFact = document.querySelector('.fun-fact');


nextButton.addEventListener('click', async () => {
  funFact.innerHTML = "Loading";
  const response = await axios.get(`http://numbersapi.com/random/trivia`)
  const numberFact = response.data
  funFact.innerHTML = `<p> ${numberFact} </p>`;
});