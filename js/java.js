//get element by id

let heading = document.getElementById("heading1");
heading.innerHTML = "Welcome to Web2020b";
heading.style.color = "orange";

// get element by tag name
let para = document.getElementsByClassName("para");
para[0].style.color = "red";
para[1].style.color = "green";

// get element by class 
let tags = document.getElementsByTagName('li');

tags[0].style.color = "teal";
tags[1].style.color = "orange";
tags[2].style.color = "red";
tags[3].style.color = "gray";

// query selector
let querys = document.querySelector("h2");
querys.innerHTML = "My heading 2";
querys.style.color = "pink";