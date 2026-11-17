document.getElementById('apply-btn').addEventListener('click', () => {
  const c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

document.getElementById('random-btn').addEventListener('click', () => {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.getElementById('box').style.backgroundColor = color;
});
