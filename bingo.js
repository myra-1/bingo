const nextButton = document.querySelector('#next');
const funFact = document.querySelector('.fun-fact');

nextButton.addEventListener('click', async () => {
  const response = await axios.get(`http://numbersapi.com/random/trivia`)
  const numberFact = response.data

  funFact.innerHTML = `<p> ${numberFact} </p>`;

});