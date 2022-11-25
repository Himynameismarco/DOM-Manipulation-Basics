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

//EVENTS
const btn = document.querySelector('#btn');

function alertFunction(e) {
  console.log(e.target); //e.target gibt das Element aus.
  e.target.style.backgroundColor = 'blue'; // verändert die Farbe des Targets.
  alert("YAY! YOU DID IT!");
}
btn.addEventListener('click', alertFunction);

//btn.onclick = () => alert("Hello World!");
// https://javascript.info/arrow-functions-basics

// Adding Events to multiple Buttons
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

