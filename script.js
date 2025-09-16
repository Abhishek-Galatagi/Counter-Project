let count = 0;
const counter = document.getElementById('counter');

function increase() {
  count++;
  counter.innerText = count;
}

function decrease() {
  count--;
  counter.innerText = count;
}

function resetCounter() {
  count = 0;
  counter.innerText = count;
}
