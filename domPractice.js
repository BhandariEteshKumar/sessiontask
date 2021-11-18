// function tableadd() {
//   let table = document.getElementById("mytable");
//   let row = table.insertRow();
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   cell1.innerHTML = document.getElementById("FirstName").value;
//   cell2.innerHTML = document.getElementById("LastName").value;
//   cell3.innerHTML = document.getElementById("email").value;
//   cell4.innerHTML = document.getElementById("Age").value;
// }

let x = 1;
function random() {
  document.body.style.backgroundColor = getRandomColor();
  x += 10;
  console.log(x);
}

function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xffffff);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
