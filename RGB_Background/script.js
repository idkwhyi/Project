document.getElementById('change').onclick = () =>{
  let red =  document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  document.getElementById('myDiv').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
document.getElementById('random').onclick = () => {
  let red =  Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  document.getElementById('myDiv').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById('show').textContent = `rgb(${red}, ${green}, ${blue})`;
}