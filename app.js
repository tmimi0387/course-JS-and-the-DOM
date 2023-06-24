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

const link = document.querySelector('#my-classroom');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Wow! We didn't navigate to a new page!");
});