// headeer
let headeer = document.createElement("header");
headeer.className = "website-head";
headeer.style.cssText = "display: flex; padding: 20px; background-color: rgb(255 , 255 , 255); justify-content: space-between; align-items: center;";

// logo
let logo = document.createElement("div");
let logotext = document.createTextNode("AHMED");
logo.style.cssText = "cplor: #3CB371; font-weight: bold; font-size: 30px";
logo.appendChild(logotext);

// menu
let menu = document.createElement("ul");
menu.style.cssText = "display: flex; list-style-type: none; padding: 0px; margin: 0px";

let li_1 = document.createElement("li");
let litext_1 = document.createTextNode("Home");
li_1.style.cssText = "margin-right:30px;";
li_1.appendChild(litext_1);


let li_2 = document.createElement("li");
let litext_2 = document.createTextNode("About");
li_2.style.cssText = "margin-right:30px;";
li_2.appendChild(litext_2);


let li_3 = document.createElement("li");
let litext_3 = document.createTextNode("Service");
li_3.style.cssText = "margin-right:30px;";
li_3.appendChild(litext_3);


let li_4 = document.createElement("li");
let litext_4 = document.createTextNode("Contact");
li_4.style.cssText = "margin-right:30px;";
li_4.appendChild(litext_4);

menu.appendChild(li_1);
menu.appendChild(li_2);
menu.appendChild(li_3);
menu.appendChild(li_4);

headeer.appendChild(logo);
headeer.appendChild(menu);
document.body.append(headeer);

// content
let content = document.createElement("div")
content.style.cssText = "background-color: #eeeeee; display: flex; flex-wrap: wrap; justify-content:center; gap: 20px; box-sizing: border-box padding: 10px;";

for(let i=0; i<16; i++ ){
    let product = document.createElement("div");
    product.style.cssText = "padding: 20px; color: black; border-radius:iem; background-color: white; margin-top: 8px; width: calc((100% - 200px)/3); text-align: center";
    
    let span = document.createElement("span");
    let spantext = document.createTextNode(`${i}`);
    span.style.cssText = "color: black; font-size: 30px;";
    span.appendChild(spantext);

    let pargh = document.createElement("p");
    let parghtext = document.createTextNode("product");
    pargh.style.cssText = "color: grey"
    pargh.appendChild(parghtext);

    product.appendChild(span);
    product.appendChild(pargh);
    content.appendChild(product);
}
document.body.append(content);

// footer

let footer = document.createElement("footer");
let footertext = document.createTextNode("copyright 2021");
footer.append(footertext);
footer.style.cssText = "text-align: center; font-size: 1.5rem; color: white; background-color: #126c51; padding:16px";
document.body.append(footer);