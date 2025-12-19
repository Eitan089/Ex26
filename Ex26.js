function f1() {
  var img1 = document.getElementById("img1");
  var width = img1.getAttribute("width");
  var height = img1.getAttribute("height");
  alert(`Image width: ${width}, Image height: ${height}`);
  var link1 = document.getElementById("a1");
  var href = link1.getAttribute("href");
  alert(`Link href: ${href}`);
}
function f2() {
  var img1 = document.getElementById("img1");
  img1.setAttribute("width", "200");
  img1.setAttribute("height", "200");
}
function f3() {
  var img1 = document.getElementById("img1");
  var width = img1.getAttribute("width");
  var height = img1.getAttribute("height");
  img1.setAttribute("width", parseInt(width) * 3);
  img1.setAttribute("height", parseInt(height) * 3);
}
function f4() {
  var row2 = document.getElementById("row2");
  var cell1 = document.createElement("td");
  cell1.innerHTML = "I LOVE javascript!";
  cell1.setAttribute("align", "center");
  row2.appendChild(cell1);
  var cell2 = document.createElement("td");
  row2.appendChild(cell2);
}
function CreateRow() {
  var table = document.getElementById("tbl");
  var img = document.createElement("img");
  img.setAttribute("src", "img/1.png");
  img.setAttribute("width", "100");
  img.setAttribute("height", "100");

  var link = document.createElement("a");
  link.setAttribute("href", "1.html");
  link.innerHTML = "Link to page 1";

  var row = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");

  cell1.appendChild(img);
  cell2.appendChild(link);
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
}
function CreateRow2(rowIndex, imgHeight, imgWidth) {
  var table = document.getElementById("tbl");
  var row = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");

  var img = document.createElement("img");
  img.setAttribute("src", "img/" + rowIndex + ".png");
  img.setAttribute("height", imgHeight);
  img.setAttribute("width", imgWidth);

  var link = document.createElement("a");
  link.setAttribute("href", rowIndex + ".html");
  link.innerHTML = "Link to page " + rowIndex;

  cell1.appendChild(img);
  cell2.appendChild(link);
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
}

function CreateTable(rows) {
  for (var i = 1; i <= rows; i++) {
    CreateRow2(i, 100, 100);
  }
}
function CreateCell(src, size) {
  var cell = document.createElement("td");
  var img = document.createElement("img");
  img.src = src;
  img.width = size;
  img.height = size;
  cell.appendChild(img);
  return cell;
}
function AddLinkToCell(cell, href, content) {
  var link = document.createElement("a");
  link.href = href;
  link.innerHTML = content;
  cell.appendChild(link);
}

function CreateRow3(index, onlyImage) {
  var row = document.createElement("tr");
  var cellImg = CreateCell("img/" + index + ".png", 100);
  row.appendChild(cellImg);
  if (!onlyImage) {
    var cellLink = document.createElement("td");
    var href = index + ".html";
    AddLinkToCell(cellLink, href, "Link to page " + index);
    row.appendChild(cellLink);
  }
  return row;
}
function CreateTableRows(tbl, count) {
  var tbl = document.getElementById("tbl4");
  for (var i = 1; i <= count; i++) {
    if (i % 2 == 0) {
      tbl.appendChild(CreateRow3(i, true));
    } else {
      tbl.appendChild(CreateRow3(i, false));
    }
  }
}
function CreateTableByButton() {
  var count = document.getElementById("numInput").value;
  if (count == 3 || count == 5) {
    CreateTableRows(tbl, count);
  } else {
    alert("enter 3 or 5");
  }
}
function CreateTableByNiglal() {
  var count = document.getElementById("niglal").value;
  if (count == 3 || count == 5) {
    CreateTableRows(tbl, count);
  } else {
    alert("enter 3 or 5");
  }
}
window.onload = function () {
  f4();
  CreateRow();
  CreateRow2(2, 100, 100);
  CreateTable(5);

  var table = document.getElementById("tbl");

  var row = document.createElement("tr");

  var imgCell = CreateCell("img/1.png", 100);
  row.appendChild(imgCell);

  var linkCell = document.createElement("td");
  AddLinkToCell(linkCell, "6.html", "Link to page 6");
  row.appendChild(linkCell);

  table.appendChild(row);

  var newRow = CreateRow3(5, false);
  table.appendChild(newRow);

  CreateTableRows(tbl, 5);
<<<<<<< HEAD
  //xxa
=======
>>>>>>> 535e8a334f67326d99a3b6ef9e5e2b0a74c167d4
};
