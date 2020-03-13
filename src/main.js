import { example } from './data.js';

console.log(example);

let refreshButton = document.getElementById('reload');

function refreshPage() {
  window.location.reload();
}

refreshButton.addEventListener('click', refreshPage);