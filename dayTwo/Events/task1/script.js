function cloneDiv(element) {
  const clone = element.cloneNode(true);
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  clone.style.backgroundColor = randomColor;
  document.body.appendChild(clone);
}