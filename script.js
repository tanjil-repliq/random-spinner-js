const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const nameInput = document.getElementById("nameInput");
const addNameButton = document.getElementById("addNameButton");
const nameList = document.getElementById("nameList");
const resultsContainer = document.getElementById("results-container");
const results = document.getElementById("results");
let names = ["Tanjil", "Tamanna", "Tabib", "Labib", "Tanvir"];
let startAngle = 0;
let arc = Math.PI / (names.length / 2);
let spinTimeout = null;
let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;
let spinAngle = 0;
let winnerIndex = -1;

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arc = Math.PI / (names.length / 2);
  for (let i = 0; i < names.length; i++) {
    let angle = startAngle + i * arc;
    ctx.fillStyle = getColor(i, names.length);
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      angle,
      angle + arc,
      false
    );
    ctx.arc(canvas.width / 2, canvas.height / 2, 0, angle + arc, angle, true);
    ctx.fill();
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "600 16px Arial"; // Set font weight and size
    ctx.translate(
      canvas.width / 2 + (Math.cos(angle + arc / 2) * canvas.width) / 3,
      canvas.height / 2 + (Math.sin(angle + arc / 2) * canvas.height) / 3
    );
    ctx.rotate(angle + arc / 2 + Math.PI / 2);
    ctx.fillText(names[i], -ctx.measureText(names[i]).width / 2, 0);
    ctx.restore();
  }
}

function getColor(index, total) {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A6",
    "#FFC300",
    "#FF33D6",
    "#FG34A6",
  ];
  return colors[index % colors.length];
}

function rotateWheel() {
  spinAngle += spinAngleStart - (spinTime / spinTimeTotal) * spinAngleStart;
  startAngle += (spinAngle * Math.PI) / 180;
  drawWheel();
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
  } else {
    spinTimeout = setTimeout("rotateWheel()", 30);
  }
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  const degrees = (startAngle * 180) / Math.PI + 90;
  const arcd = (arc * 180) / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd);
  winnerIndex = index;
  drawWheel();
  displayWinner();
}

function spin() {
  winnerIndex = -1; // Reset winner index
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function addName() {
  const name = nameInput.value.trim();
  if (name !== "") {
    names.push(name);
    nameInput.value = "";
    updateNameList();
    drawWheel();
  }
}

function updateNameList() {
  nameList.innerHTML = "";
  names.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}

function displayWinner() {
  results.textContent = `The winner is: ${names[winnerIndex]}`;
  resultsContainer.style.display = "block";
}

spinButton.addEventListener("click", spin);
addNameButton.addEventListener("click", addName);
drawWheel();
updateNameList();
