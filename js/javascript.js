// your JavaScript file
const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent= "Hey! I'm red!";
container.appendChild(para);
para.style.color = "red";


const bh3=document.createElement("h3");
bh3.textContent="I'm a blue h3!";
bh3.style.color= "blue";
container.appendChild(bh3);


const div = document.createElement("div");
div.setAttribute("style", "border-style:solid; background: pink;");

const h1= document.createElement("h1");
h1.textContent="I'm in a div";
div.appendChild(h1);

const p = document.createElement("p");
p.textContent="ME TOO!";
div.appendChild(p);

container.appendChild(div);






const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);



// const para = document.createElement("p");
// const node = document.createTextNode("Hey! I'm red!");
// node.color="blue";
// para.appendChild(node);
// container.appendChild(para);
// container.style.color = "red";


