// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let count;

function setCount(n) {
  count = n;
  document.querySelector("#counter").textContent = count.toString();
}

function increment() {
  setCount(count + 1);
}

function reset() {
  setCount(0);
}

function load() {
  document.querySelector("#increment").addEventListener("click", increment);
  document.querySelector("#reset").addEventListener("click", reset);
  reset();
}

document.addEventListener("DOMContentLoaded", load);
