const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  // Perform login validation and redirect to enrolled courses page
});
