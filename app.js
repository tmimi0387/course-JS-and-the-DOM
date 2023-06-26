const nanodegreeCard = document.querySelector('.card');
const programName = document.querySelector('.card__content--h5.slate.strong');
programName.innerHTML = '<strong><em>Everything</em> You Need To Know About Data</strong>';

const testimonies = document.querySelector('.testimonials');
const adviceHeader = document.createElement('h2');

adviceHeader.textContent = 'Advice for New Udacity Students';
testimonies.appendChild(adviceHeader);

const advice = '<p>Study in a distraction free area. Nothing stops momentum quicker than a distraction.</p>';
testimonies.insertAdjacentHTML('beforeend', advice);

const startButton = document.querySelector('#start-now');
startButton.setAttribute('style', 'background: #2015ff; border-radius: 5rem');

const newHeroHomepage = document.querySelector('.hero--homepage');
newHeroHomepage.classList.add('new-hero');

const listOfCards = document.querySelectorAll('.card');
for (let i = 0; i < listOfCards.length; i++) {
  listOfCards[i].classList.add('new-card');
}

const mainHeading = document.querySelector('h1');
const originalHeading = mainHeading.textContent;
const updatedHeading = 'Build an AR App';

document.addEventListener('mouseenter', function() {
  mainHeading.textContent = updatedHeading; 
})

document.addEventListener('mouseleave', function () {
  mainHeading.textContent = originalHeading;
})

// create a nodeList of all the nanodegree cards
const ndCards = document.querySelectorAll('.card--nanodegree__title');

// loop through cards
ndCards.forEach(function (card) {
  // create a button element
  const ndButton = document.createElement('button');
  // set the text inside the button
  ndButton.textContent = 'Add to Favorites';
  // set the classes for the button
  ndButton.classList = 'button button--primary';
  // append button after the title
  card.appendChild(ndButton);
});

function toggleFavorite(evt) {
  // holds the target
  const target = evt.target;
  // makes sure what is being clicked is a button
  if (target.nodeName === 'BUTTON') {
    // prevents navigating to page when button is clicked
    evt.preventDefault();
    // if this card is already a favorite
    if (target.textContent.startsWith('Add')) {
      //toggles favorite text
      evt.target.textContent = 'Remove From Favorites';
      // creates a p element and adds ⭐ then appends it after the h4 element
      const favorite = document.createElement('p');
      favorite.textContent = '⭐⭐';
      target.parentElement.appendChild(favorite);
    } else {
      // changes text back if it's clicked again
      evt.target.textContent = 'Add To Favorites';
      // removes the added p element
      target.nextSibling.remove();
    }
  }
};

const ndContainer = document.querySelector('.list-nanodegrees');
ndContainer.addEventListener('click', toggleFavorite);