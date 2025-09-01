//make web header and navbar
let header = document.createElement("header");
header.setAttribute("class", "website-head");
header.style.cssText = `
    display: flex;
    padding: 20px;
    background-color: white;
    justify-content: space-between;
    align-items: center;
`;

let logo = document.createElement("div");
logo.textContent = "Elzero";
logo.setAttribute("class", "logo");
logo.setAttribute("title", "webstite logo");
logo.style.cssText = `
    cursor:pointer;
    color: green;
    font-size: 25px;
    font-weight: bold;
    
`;

let navList = document.createElement("ul");
navList.setAttribute("class", "menu");
navList.style.cssText = `
    pading:0px;
    display: flex;
    margin: 0px;
    list-style: none;
`;

let menu = ["Home", "About", "Service", "Contact"];
for (let item of menu) {
    let li = document.createElement("li");
    li.textContent = item;
    li.style.cssText = `
        display:flex;
        color:gray;
        margin:5px;
        cursor:pointer;
    `;
    navList.appendChild(li);
}

header.appendChild(logo);
header.appendChild(navList);
document.body.appendChild(header);

//make page content "PLP"
let content = document.createElement("div");
content.setAttribute("class", "content");
content.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
    gap: 20px;
    background-color: lightgray;
    min-height: calc(100vh - 142px);
    box-sizing: border-box;
`;
for (let i = 1; i <= 15; i++){
    let product = document.createElement("div");
    let num = document.createElement("span");
    let text = document.createTextNode("Product");
    product.setAttribute("class", "product");
    num.textContent = i;
    product.appendChild(num);
    product.appendChild(text);
    num.style.cssText = `
        color:black;
        font-size:40px;
        display:block;
        font-weight:normal;
        margin-bottom:10px;
        margin-top:10px;
    `
    product.style.cssText = `
        padding:20px;
        background-color:rgb(255,255,255);
        width:calc((100% - 40px)/3);
        text-align:center;
        box-sizing:border-box;
        color:rgb(136,136,136);
        border: 1px solid rgb(221,221,221);
        border-radius:6px;
    `;
    content.appendChild(product);
}
document.body.appendChild(content);

//footer
let footer = document.createElement("footer");
footer.textContent = "Copyright 2025";
footer.style.cssText = `
    background-color:green;
    color:rgb(255,255,255);
    text-align:center;
    font-size:25px;
    padding:20px;
`
document.body.appendChild(footer);


document.body.style.cssText = `
    margin: 0px; 
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
