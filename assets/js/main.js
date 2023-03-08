console.log('mxsr')

const nav = document.getElementById('siteNav');
const navButton = document.getElementById('siteNavButton');

navButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  nav.classList.toggle('block');
})
