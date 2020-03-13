// =========================== VARIABLES ========================================//

const nextButton = document.querySelector('#next-button');
const funFact = document.querySelector('.fun-fact');
const currentDisplay = document.querySelector('#current-call-display');
const olNeedToCallChildren = document.querySelector("#ol-need-to-call").children;
// ^^ This selects all 75 <li> from the ol-need-to-call list
const olHaveCalled = document.querySelector("#ol-have-called");
let newListItem = document.createElement("li");

// ============================================================================//

nextButton.addEventListener('click', async () => {
  let theCall = Math.floor(Math.random() * olNeedToCallChildren.length)
  let theElement = olNeedToCallChildren[theCall];
  newListItem.appendChild(theElement);
  // olHaveCalled.appendChild(newListItem);
  // ^^ issues with order - instead use below 
  olHaveCalled.insertBefore(theElement, olHaveCalled.firstChild);
  currentDisplay.innerHTML = theElement.innerHTML;
  // ^^ setting this properties HTML to equal the elements innerHTML 

  // API fun fact about number starts below
  funFact.innerHTML = "...";
  let number = theElement.getAttribute("data-number");
  const response = await axios.get(`http://numbersapi.com/${number}`)
  const numberFact = response.data
  funFact.innerHTML = `<p> ${numberFact} </p>`;
});