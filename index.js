// Your code here
const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
    const left = positionToInteger(DODGER.style.left);
    if (left > 0) {
      DODGER.style.left = `${left - 4}px`;
    }
  }

  function moveDodgerRight() {
    const left = positionToInteger(DODGER.style.left);
    if (left < 360) {
      DODGER.style.left = `${left + 4}px`;
    }
  }

  function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0;
  }
