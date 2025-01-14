//1
const firstButton = document.querySelector("button");
const buttontext = document.querySelector("p");
firstButton.textContent = buttontext.textContent
//2
const firstImg = document.querySelector('img');
firstImg.setAttribute("src", "https://skillforge.com/wp-content/uploads/2020/10/javascript-909x1024.png");
firstImg.style.height= "100px";
//3
const firstLink = document.querySelector("a");
firstLink.setAttribute("href", "https://skillforge.com/wp-content/uploads/2020/10/javascript-909x1024.png");
const linkImg = document.querySelector('[alt="js"]');
linkImg.style.height = "100px"
linkImg.setAttribute("alt", "html");
//4
const list = document.querySelector("ul");
const firstLi = list.firstChild;
firstLi.textContent = "перший елемент"