// console.log(window.history);
// console.log(window.innerHeight);

// let myDivs = document.querySelectorAll(".my_div");
// console.log(myDivs);

// let myIds = document.getElementById("my_id");
// console.log(myIds);

// myIds.style.background = "red";

// let myLovelyDiv = document.querySelector(".my_div");
// console.log(myLovelyDiv);

// let myLovelyDiv = document.querySelectorAll(".my_div");
// console.log(myLovelyDiv);

// let myLovelyDiv = document.getElementsByClassName("my_div");
// const div = myLovelyDiv[0];

// div.innerHTML = "bye";
// div.innerHTML += " bye";

// div.outerHTML += " bye";

// console.log(div);
document.body.style.margin = 0;
let header = document.createElement("header");
header.className = "my_header";
header.innerHTML = "Заголовок";
header.style.background = "green";
header.style.height = "50px";
document.body.prepend(header);

let section = document.createElement("section");
section.className = "section";

header.after(section);

let list = document.createElement("ol");
list.className = "list";
section.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `Элемент списка номер ${i}`;
  list.append(li);
}

let inputWrapper = document.createElement("div");
inputWrapper.className = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.width = "150px";
list.after(inputWrapper);

let input = document.createElement("input");
input.type = "text";
list.after(input);

let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "Добавить TODO";
// button.onclick = () => console.log(button.innerHTML);
button.onclick = function () {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  //   if (!input.value) {
  //     console.log("Enter smth");
  //     return;
  //   }
  ul.appendchild(li);
  input.value = "";
};
input.after(button);
