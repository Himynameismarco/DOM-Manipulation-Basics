console.log("Hello World!");

// QuerySelector, creating Elements, manipulating them, adding CSS, and appending them
const container = document.querySelector('#container');
const paragraph = document.createElement('p');
//paragraph.style.backgroundColor = 'green';
paragraph.innerHTML = 'Used "document.createElement("p")" to create this element. <br>'
    + 'Selected the container-parent via "document.querySelector(".container"). <br>'
    + 'Added the element via "container.appendChild(paragraph)".';
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = 'Same for H3';
container.appendChild(h3);

const myDiv = document.createElement('div');
myDiv.style.cssText = 'color: blue; background: pink; border-style: solid; border-color: black;';
myDiv.innerHTML = '<p>Test-Div</p>';

const h2inDiv = document.createElement('h2');
h2inDiv.textContent = 'I am in a div';
myDiv.appendChild(h2inDiv);
myDiv.appendChild(paragraph);
container.appendChild(myDiv);